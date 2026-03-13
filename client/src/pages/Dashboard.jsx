import { useState } from "react";
import LiveTrackButton from "../components/LiveTrackButton";
import MapView from "../components/MapView";

function Dashboard() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Vidhyut EV Tracker</h1>
        <hr></hr>
      <LiveTrackButton onClick={() => setShow(true)} />
      {show && <MapView />}
    </div>
  );
}
export default Dashboard;
