import {
    Box,
    Typography,
    Button,
    ThemeProvider,
    createTheme,
} from "@mui/material";
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.1rem",
                    border: "solid black 1px",
                    borderRadius: "15px",
                    width: "100%",
                    ":hover": {
                        backgroundColor: "#fff3e34a",
                        borderColor: "#B88E2F",
                        color: "#B88E2F",
                    },
                    textTransform: "none",
                    padding: "4% 1%",
                    marginBottom: "15px",
                    color: "black",
                },
            },
        },
    },
});

export const CheckOutCard = () => {
    // props Subtotal, Total, discount
    return (
        <Box
            sx={{
                backgroundColor: "#F9F1E7",
                padding: "4% 15% 10% 15%",
                width: "50%",
            }}>
            <Typography
                variant="h5"
                component="h1"
                fontWeight="bold"
                sx={{ marginBottom: "35px" }}>
                Cart Total
            </Typography>
            <Box
                display="flex"
                justifyContent="space-between"
                marginBottom="30px">
                <Typography
                    fontWeight="bold"
                    variant="subtitle1"
                    component="h2">
                    Subtotal
                </Typography>
                <Typography
                    color={"#9F9F9F"}
                    variant="subtitle1"
                    component="h2">
                    R$10000
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginBottom="30px">
                <Typography
                    fontWeight="bold"
                    variant="subtitle1"
                    component="h2">
                    Total
                </Typography>
                <Typography color={"#B88E2F"} variant="h5" component="h2">
                    R$10000
                </Typography>
            </Box>
            <ThemeProvider theme={theme}>
                <Button>Check Out</Button>
            </ThemeProvider>
        </Box>
    );
};
