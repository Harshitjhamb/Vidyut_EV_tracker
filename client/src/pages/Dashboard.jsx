import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MapView from "../components/MapView";
import EVInfoPanel from "../components/Dashboard/EVInfoPanel";
function Dashboard() {
  const navigate = useNavigate();
  const [liveData,setLiveData] = useState(null);
  return (
    <div style={{fontFamily:"sans-serif", background:"#f5f6f8"}}>
      <div style={{padding:"20px",background:"white",borderBottom:"1px solid #eee"}}>
        <div
          style={{ color:"#ff6a00", cursor:"pointer", marginBottom:"10px", fontWeight:"bold"}}
          onClick={()=>navigate("/fleet")}>
          ← Fleet
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontSize:"28px",fontWeight:"700"}}>EV 1 — Shuttle Alpha</div>
          </div>
          <div
            style={{
              background: liveData?.status === "Online" ? "#e7f6ec" : "#eee",
              color: liveData?.status === "Online" ? "#1f9d55" : "#555",
              padding:"8px 16px",
              borderRadius:"20px",
              fontWeight:"600"
            }}> ● {liveData?.status || "Unknown"}
          </div>
        </div>
      </div>
      <div style={{padding:"20px"}}>
        <MapView/>
      </div>
      {liveData && (
        <EVInfoPanel
          position={position}
          speed={speed}
          distance={distance}
          eta={eta}
          battery={battery}
          status={status}
          lastUpdate={lastUpdate}
        />
)}
    </div>
  );
}
export default Dashboard;