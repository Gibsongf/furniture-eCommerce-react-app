import {
    Box,
    Typography,
    Button,
    ThemeProvider,
    createTheme,
    Divider,
} from "@mui/material";
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.1rem",
                    border: "solid black 1px",
                    borderRadius: "15px",
                    width: "70%",
                    ":hover": {
                        backgroundColor: "#fff3e34a",
                        borderColor: "#B88E2F",
                        color: "#B88E2F",
                    },
                    textTransform: "none",
                    padding: "3%",
                    marginTop: "35px",
                    color: "black",
                },
            },
        },
    },
});

export const PlaceOrder = () => {
    // props Subtotal, Total, discount
    return (
        <Box
            sx={{
                padding: "10% 5%",
                width: "70%",
            }}>
            <Box display="flex" justifyContent="space-between">
                <Typography
                    variant="h5"
                    component="h1"
                    fontWeight="bold"
                    sx={{ marginBottom: "35px" }}>
                    Product
                </Typography>
                <Typography
                    variant="h5"
                    component="h1"
                    fontWeight="bold"
                    sx={{ marginBottom: "35px" }}>
                    Subtotal
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                marginBottom="15px">
                <Typography
                    variant="subtitle1"
                    component="h2"
                    color={"#9F9F9F"}>
                    Product name{" "}
                    <span style={{ color: "black" }}>X (quantity)</span>
                </Typography>
                <Typography variant="h5" component="h2">
                    R$10000
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginBottom="15px">
                <Typography variant="subtitle1" component="h2">
                    Subtotal
                </Typography>
                <Typography variant="h6" component="h2">
                    R$10000
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginBottom="45px">
                <Typography variant="subtitle1" component="h2">
                    Total
                </Typography>
                <Typography
                    fontWeight={"bold"}
                    color={"#B88E2F"}
                    variant="h5"
                    component="h2">
                    R$10000
                </Typography>
            </Box>
            <Divider orientation="horizontal" />
            <ThemeProvider theme={theme}>
                <Button>Place Order</Button>
            </ThemeProvider>
        </Box>
    );
};
