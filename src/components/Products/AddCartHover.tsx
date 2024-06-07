import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.2rem",
                    ":hover": {
                        border: "#B88E2F solid 2px",
                        backgroundColor: "white",
                    },
                    textTransform: "none",
                    padding: "10px 65px 10px 65px",
                },
            },
        },
    },
});

export const AddToCart = ({ display }: { display: string }) => {
    return (
        <div
            style={{
                display: display,
                position: "absolute",
                backgroundColor: "rgba(58, 58, 58, 0.5)",
                width: "100%",
                height: "100%",
                zIndex: "2",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <ThemeProvider theme={theme}>
                <Button
                    sx={{
                        backgroundColor: "white",
                        color: "#B88E2F",
                    }}
                    disableElevation={true}
                    variant="text">
                    Add to cart
                </Button>
            </ThemeProvider>
        </div>
    );
};
