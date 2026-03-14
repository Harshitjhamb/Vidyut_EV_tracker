import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      marginTop: "20px",
      fontSize: "14px",
      color: "#555"
    }}>
      <span>Made with</span>
      <FaHeart color="red" />
      <span>by Harshit</span>
    </div>
  );
}

export default Footer;