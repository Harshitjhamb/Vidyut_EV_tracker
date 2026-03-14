function LiveTrackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{padding: "10px 18px",background: "#38df75",color: "white",border: "none",borderRadius: "8px",cursor: "pointer",fontSize: "16px",}}>
      Show Live EV
    </button>
  );
}
export default LiveTrackButton;
