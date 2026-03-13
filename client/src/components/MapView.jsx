import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLoadScript } from "@react-google-maps/api";
import MapContainer from "./Map/MapContainer";
import EVInfoPanel from "./Dashboard/EVInfoPanel";
import ControlButtons from "./Dashboard/ControlButtons";
import { calculateETA } from "../utils/etaUtils";
function MapView() {
  const [status, setStatus] = useState("Unknown");
  const [lastUpdate, setLastUpdate] = useState(null);
  const [position, setPosition] = useState(null);
  const [animatedPos, setAnimatedPos] = useState(null);
  const [heading, setHeading] = useState(0);
  const [battery, setBattery] = useState(null);
  const [speed, setSpeed] = useState(0);
  const [distance, setDistance] = useState(null);
  const [eta, setEta] = useState(null);
  const [directions, setDirections] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);
  const boundsInitialized = useRef(false);
  const prevPos = useRef(null);
  const prevTime = useRef(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAJBoUwZIgzPlgQfpRIcFsBlALaGTP9pjA"
  });

  const calculateRoute = (user, ev) => {
    if (!user || !ev || !window.google) return;
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: user,
        destination: ev,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
          const leg = result.routes[0].legs[0];
          setDistance(leg.distance.value);
          setEta(leg.duration.value);
        }
      }
    );
  };
  const fetchLive = async () => {
    try {
      const res = await axios.get("http://localhost:5050/api/live");
      const newPos = {
        lat: res.data.latitude,
        lng: res.data.longitude
      };
        const now = Date.now();
  if (prevPos.current && prevTime.current) {
    const dx = newPos.lat - prevPos.current.lat;
    const dy = newPos.lng - prevPos.current.lng;
    const dist = Math.sqrt(dx * dx + dy * dy) * 111139;
    const timeDiff = (now - prevTime.current) / 1000;
    const newSpeed = dist / timeDiff;
    setSpeed(newSpeed);
  }
  prevPos.current = newPos; 
  prevTime.current= now ; 
      
      setStatus(res.data?.status || "Unknown");
      setBattery(res.data?.attributes?.battery);
      setLastUpdate(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      );
      setPosition(newPos);
      setAnimatedPos(newPos);
      if (userLocation) {
        calculateRoute(userLocation, newPos);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchLive();
    const interval = setInterval(fetchLive, 1000);
    return () => clearInterval(interval);
  }, [userLocation]);
  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        setUserLocation(loc);
      },
      (err) => {
        console.log("Location error:", err);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }, []);
  useEffect(() => {
    if (!mapRef.current || !animatedPos || !userLocation || boundsInitialized.current) return;
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(animatedPos);
    bounds.extend(userLocation);
    mapRef.current.fitBounds(bounds);
    boundsInitialized.current = true;
  }, [animatedPos, userLocation]);
  const followEV = () => {
    if (!mapRef.current || !animatedPos) return;
    mapRef.current.panTo(animatedPos);
  };

  if (!isLoaded) return <div>Loading Map...</div>
  return (
    <div>
      <EVInfoPanel
        position={position}
        speed={speed}
        distance={distance}
        eta={calculateETA(distance, speed)}
        battery={battery}
        status={status}
        lastUpdate={lastUpdate}
      />
      <ControlButtons
        fetchLive={fetchLive}
        followEV={followEV}
      />
      <MapContainer
        mapRef={mapRef}
        animatedPos={animatedPos}
        heading={heading}
        userLocation={userLocation}
        directions={directions}
      />
    </div>
  );
}
export default MapView;