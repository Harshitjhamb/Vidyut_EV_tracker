import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Card, CardContent, Chip, LinearProgress, Container } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
function EVSelectScreen() {
    const navigate = useNavigate();
    const [status, setStatus] = useState("Unknown");
    const [battery, setBattery] = useState(null);

    const API_URL = import.meta.env.VITE_API || "http://localhost:5050";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/live`);
                console.log("API DATA:", res.data);
                setStatus(res.data?.status || "Unknown");
                // battery extraction
                const battery =
                    res.data?.attributes?.battery ??
                    res.data?.battery ??
                    null;
                setBattery(battery);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <Container maxWidth="sm" sx={{ py: 4 }}>
            <Typography onClick={() => navigate("/")}
                sx={{ color: "#ff6a00", mb: 2, cursor: "pointer" }}
            >← Back</Typography>
            <Typography variant="h4" fontWeight="bold">Campus Fleet</Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}> 3 vehicles registered · 1 active
            </Typography>
            <Card sx={{ mb: 3, borderRadius: 4, border: "2px solid #f2b66d", boxShadow: "none" }}>
                <CardContent onClick={() => navigate("/dashboard")}
                    sx={{ cursor: "pointer" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ background: "#f7efe6", borderRadius: 3, p: 2 }}>
                            <DirectionsBusIcon sx={{ color: "#ff6a00" }} />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography fontWeight="bold">Campus Shuttle Alpha </Typography>
                        </Box>
                        <Chip label={status} color={status === "Online" ? "success" : "default"} size="small" />
                        <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Typography sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                            Battery level
                            <span style={{
                                color: battery !== null && battery < 10 ? "red" : "#2e7d32",
                                fontWeight: "bold"
                            }}>
                                {battery !== null ? `${battery}%` : "--%"}{" "}
                                {battery !== null && battery < 10 ? "— Needs charge" : ""}
                            </span>
                        </Typography>
                        <LinearProgress variant="determinate" value={battery ?? 0}
                            sx={{ height: 8, borderRadius: 5 }} />
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{ mb: 3, borderRadius: 4 }}>
                <CardContent>
                    <Typography fontWeight="bold"> EV 2 <Chip label="Unavailable" size="small" sx={{ ml: 1 }} /></Typography>
                    <Typography color="text.secondary">Off route today
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ mb: 4, borderRadius: 4 }}>
                <CardContent>
                    <Typography fontWeight="bold">
                        EV 3 <Chip label="Unavailable" size="small" sx={{ ml: 1 }} />
                    </Typography>
                    <Typography color="text.secondary">
                        Off route today
                    </Typography>
                </CardContent>
            </Card>
            <Card
                sx={{ borderRadius: 4, background: "#fff7e6", border: "1px solid #f3c27a" }}>
                <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <InfoOutlinedIcon />
                    <Typography>
                        EV 2 and EV 3 are currently off duty. Only EV 1 is in service today.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
export default EVSelectScreen;
