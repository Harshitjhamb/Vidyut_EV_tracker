import { FaSyncAlt, FaCrosshairs } from "react-icons/fa";

function ControlButtons({ fetchLive, followEV }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={fetchLive}>
        <FaSyncAlt /> Refresh
      </button>

      <button onClick={followEV}>
        <FaCrosshairs /> Follow EV
      </button>
    </div>
  );
}

export default ControlButtons;