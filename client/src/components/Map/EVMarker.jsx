import { MarkerF } from "@react-google-maps/api";
function EVMarker({ position, heading }) {
  if (!window.google) return null;
  return (
    <MarkerF
      position={position}
      icon={{
        url: "https://cdn-icons-png.flaticon.com/512/744/744465.png",
        scaledSize: new window.google.maps.Size(40, 40),
        rotation: heading
      }}
    />
  );
}
export default EVMarker;