import { Box, Typography, Button, Card, CardContent, Grid, Chip, Container } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import { useNavigate } from "react-router-dom";
function MainScreen() {
    const navigate = useNavigate()
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#f4f5f7" }}>
            <Box
                sx={{ background: "linear-gradient(135deg,#0f172a,#243b7a)", color: "white", py: { xs: 6, md: 8 }, }}>
                <Container maxWidth="lg">
                    <Typography sx={{ mb: 2 }}>⚡ Vidyut</Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: { xs: "32px", md: "40px" }, lineHeight: 1.2 }}>
                        Track campus <br /> EVs live
                    </Typography>
                    <Typography sx={{ mt: 2, opacity: 0.8 }}>
                        Know where the shuttle is before you walk out the door.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg">
                <Grid container spacing={3} sx={{ mt: -6, mb: 4 }}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ textAlign: "center", borderRadius: 3 }}>
                            <CardContent>
                                <DirectionsBusIcon sx={{ fontSize: 40, color: "#ff6a00" }} />
                                <Typography fontWeight="bold">3 EVs</Typography>
                                <Typography variant="body2" color="text.secondary">on campus</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ textAlign: "center", borderRadius: 3 }}>
                            <CardContent>
                                <LocationOnIcon sx={{ fontSize: 40, color: "#e53935" }} />
                                <Typography fontWeight="bold">Live GPS</Typography>
                                <Typography variant="body2" color="text.secondary">tracking</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ textAlign: "center", borderRadius: 3 }}>
                            <CardContent>
                                <BatteryFullIcon sx={{ fontSize: 40, color: "#2e7d32" }} />
                                <Typography fontWeight="bold">Battery</Typography>
                                <Typography variant="body2" color="text.secondary">monitor</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Card sx={{ borderRadius: 3, mb: 5 }}>
                    <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <SatelliteAltIcon />
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography fontWeight="bold">NIT Delhi Campus </Typography>
                            <Typography variant="body2" color="text.secondary">1 shuttle active right now </Typography>
                        </Box>
                        <Chip label="Live" color="success" size="small" />
                    </CardContent>
                </Card>
                <Button fullWidth variant="contained"
                    onClick={() => navigate("/fleet")}
                    sx={{ backgroundColor: "#ff6a00", borderRadius: 3, py: 1.6, fontWeight: "bold", fontSize: "16px" }}>
                    VIEW SHUTTLES →
                </Button>
                <Typography align="center" color="text.secondary" sx={{ mt: 4, mb: 4 }} >
                    National Institute of Technology, Delhi
                </Typography>
            </Container>
        </Box>
    );
}
export default MainScreen;
