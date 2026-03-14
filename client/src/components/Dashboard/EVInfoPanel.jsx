import { Box, Typography, Card, CardContent, LinearProgress } from "@mui/material";
function EVInfoPanel({ position, speed, distance, eta, battery, status, lastUpdate }) {
    const batteryLow = battery !== null && battery < 10;
    return (
        <Box sx={{ mt: 3 }}>
            <Card sx={{ borderRadius: 4, mb: 3 }}>
                <CardContent>
                    <Typography fontWeight="bold" sx={{ mb: 2 }}>
                        Vehicle Details
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <Typography color="text.secondary">Latitude</Typography>
                        <Typography>{position?.lat?.toFixed(4)}° N</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <Typography color="text.secondary">Longitude</Typography>
                        <Typography>{position?.lng?.toFixed(4)}° E</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <Typography color="text.secondary">Speed</Typography>
                        <Typography>{speed?.toFixed(2)} m/s</Typography>
                    </Box>
                    {distance && (
                        <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                            <Typography color="text.secondary">Distance</Typography>
                            <Typography>{(distance / 1000).toFixed(2)} km</Typography>
                        </Box>
                    )}
                    <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <Typography color="text.secondary">ETA</Typography>
                        <Typography>{eta}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <Typography color="text.secondary">Last update</Typography>
                        <Typography>{lastUpdate}</Typography>
                    </Box>
                </CardContent>
            </Card>
            <Card
                sx={{
                    borderRadius: 4, border: batteryLow ? "2px solid #ffcccc" : "1px solid #eee",
                    background: batteryLow ? "#fff5f5" : "white"
                }}>
                <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Typography fontWeight="bold">Battery</Typography>
                        <Typography
                            fontWeight="bold"
                            sx={{ color: batteryLow ? "red" : "#2e7d32" }}>
                            {battery ?? "--"}%
                        </Typography>
                    </Box>
                    <LinearProgress
                        variant="determinate"
                        value={battery ?? 0}
                        sx={{height: 8,borderRadius: 5,mb: 2}}/>
                    {batteryLow && (
                        <Typography sx={{color:"red",fontSize:14}}>
                            ⚠ Battery critically low. Vehicle may not complete full route.
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}
export default EVInfoPanel;