import { Box, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr);",
                minHeight: "300px",
                // rowGap: "35px",
                padding: "2rem",
                // width: "90%",
                justifyItems: "center",
                textAlign: "left",
            }}>
            <Box
                className="col1"
                display="flex"
                flexDirection="column"
                gap="40px">
                <Typography fontWeight={"bold"} variant="h5" component="h1">
                    Curabitur ullamcorpe
                </Typography>
                <Typography color="#616161" variant="h6" component="h1">
                    Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt.
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                gap="40px"
                className="col2">
                <Typography
                    textAlign="left"
                    color="#616161"
                    variant="h6"
                    component="h1">
                    Links
                </Typography>
                <Typography fontWeight={"bold"} variant="h6" component="h1">
                    Home
                </Typography>
                <Typography fontWeight={"bold"} variant="h6" component="h1">
                    Shop
                </Typography>
                <Typography fontWeight={"bold"} variant="h6" component="h1">
                    About
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                gap="40px"
                className="col3">
                <Typography color="#616161" variant="h6" component="h1">
                    Help
                </Typography>
                <Typography fontWeight={"bold"} variant="h6" component="h1">
                    Payment Options
                </Typography>
                <Typography fontWeight={"bold"} variant="h6" component="h1">
                    Returns
                </Typography>
                <Typography fontWeight={"bold"} variant="h6" component="h1">
                    Privacy Policies
                </Typography>
            </Box>
            <Box className="col4">Newsletter</Box>
        </Box>
    );
};
