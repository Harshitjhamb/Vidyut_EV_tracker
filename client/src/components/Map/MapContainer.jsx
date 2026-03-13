import { GoogleMap } from "@react-google-maps/api";
import EVMarker from "./EVMarker";
import UserMarker from "./UserMarker";
import RouteRenderer from "./RouteRenderer";

const containerStyle = {
  width: "100%",
  height: "500px",
};

function MapContainer({
  mapRef,
  animatedPos,
  userLocation,
  directions,
  heading,
}) {

  if (!animatedPos) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={17}
      onLoad={(map) => {
        mapRef.current = map;
      }}
    >

      {directions && <RouteRenderer directions={directions} />}

      {animatedPos && (
        <EVMarker position={animatedPos} heading={heading} />
      )}

      {userLocation && (
        <UserMarker position={userLocation} />
      )}

    </GoogleMap>
  );
}

export default MapContainer;