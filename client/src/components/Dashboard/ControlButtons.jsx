import { Box, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import MyLocationIcon from "@mui/icons-material/MyLocation";

function ControlButtons({ fetchLive, followEV }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mt: 3
      }}
    >

      {/* REFRESH */}
      <Button
        variant="contained"
        startIcon={<RefreshIcon />}
        onClick={fetchLive}
        sx={{
          flex: 1,
          background: "#ff6a00",
          borderRadius: 3,
          py: 1.5,
          fontWeight: "bold",
          "&:hover": {
            background: "#e65c00"
          }
        }}
      >
        Refresh
      </Button>

      {/* FOLLOW EV */}
      <Button
        variant="outlined"
        startIcon={<MyLocationIcon />}
        onClick={followEV}
        sx={{
          flex: 1,
          
          borderRadius: 3,
          py: 1.5,
          fontWeight: "bold"
        }}
      >
        Follow EV
      </Button>

    </Box>
  );
}
export default ControlButtons;