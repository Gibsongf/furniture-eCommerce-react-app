import { Button, Box, Typography, ThemeProvider } from "@mui/material";
import "../../../src/App.css";
import { themeBanner } from "../Theme";
const NewArrival = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF3E3",
        textAlign: "left",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "600px",
        height: "400px",
        padding: "40px",
        gap: "16px",
        placeSelf: "end",
      }}>
      <Typography variant="h6" component="h2">
        New Arrival
      </Typography>
      <Typography color={"#B88E2F"} variant="h2" component="h1">
        Discover Our New Collection
      </Typography>
      <Typography
        width={"45ch"}
        fontWeight={"bold"}
        variant="h6"
        component="h3">
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
        padding: "140px",
      }}>
      <NewArrival />
    </div>
  );
};
