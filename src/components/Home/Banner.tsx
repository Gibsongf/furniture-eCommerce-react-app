import { Button, Box, Typography, ThemeProvider } from "@mui/material";
import "../../../src/App.css";
import { themeBanner } from "../Theme";
const NewArrival = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#FFF3E3",
                textAlign: "left",
                padding: "30px",
                paddingTop: "40px",
                marginRight: "75px",
                borderRadius: "10px",
            }}
            height={400}
            width={600}
            display="flex"
            flexWrap={"wrap"}>
            <Typography variant="h6" component="h2">
                New Arrival
            </Typography>
            <Typography color={"#B88E2F"} variant="h2" component="h1">
                Discover Our New Collection
            </Typography>
            <Typography fontWeight={"bold"} variant="h6" component="h3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                scelerisque odio et enim tristique.
            </Typography>
            <ThemeProvider theme={themeBanner}>
                <Button variant="text">BUY NOW</Button>
            </ThemeProvider>
        </Box>
    );
};
export const Banner = () => {
    return (
        <div
            className="banner"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "99vw",
            }}>
            <NewArrival />
        </div>
    );
};
