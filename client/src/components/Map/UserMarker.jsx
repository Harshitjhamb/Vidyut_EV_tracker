import { MarkerF } from "@react-google-maps/api";
function UserMarker({ position }) {
  if (!position || !window.google) return null;
  return (
    <MarkerF
      position={position}
      icon={{
        url: "https://maps.google.com/mapfiles/kml/paddle/blu-circle.png",
        scaledSize: new window.google.maps.Size(40, 40)
      }}
    />
  );
}
export default UserMarker;