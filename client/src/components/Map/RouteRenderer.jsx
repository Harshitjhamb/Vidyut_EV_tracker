import { DirectionsRenderer } from "@react-google-maps/api";
function RouteRenderer({ directions }) {
  if (!directions) return null;
  return (
    <DirectionsRenderer
      directions={directions}
      options={{
        suppressMarkers: true,
        preserveViewport: true,
      }}
    />
  );
}

export default RouteRenderer;