function EVInfoPanel({
  position,
  speed,
  distance,
  eta,
  battery,
  status,
  lastUpdate
}) {
  return (
    <div>
      <div><b>EV Latitude:</b> {position?.lat}</div>
      <div><b>EV Longitude:</b> {position?.lng}</div>
      <div><b>Speed:</b> {speed?.toFixed(2)} m/s</div>

      {distance && (
        <div><b>Distance:</b> {(distance / 1000).toFixed(2)} km</div>
      )}

      <div><b>ETA:</b> {eta}</div>
      <div><b>Battery:</b> {battery}%</div>
      <div><b>Status:</b> {status}</div>
      <div><b>Last Update:</b> {lastUpdate}</div>
    </div>
  );
}

export default EVInfoPanel;