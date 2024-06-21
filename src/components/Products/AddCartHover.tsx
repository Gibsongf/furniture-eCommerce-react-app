import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Grow from "@mui/material/Grow";
import { useState } from "react";

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

export const AddToCart = ({ show }: { show: boolean }) => {
    // on click action to add to cart and update nums of product
    const DisplayAddToCart = (
        <Box
            sx={{
                display: "flex",
                position: "absolute",
                backgroundColor: "rgba(58, 58, 58, 0.5)",
                width: "100%",
                height: "100%",
                zIndex: "2",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
            {/*a onClick func to add to cart */}
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
        </Box>
    );
    return (
        <Box>
            <Grow in={show}>{DisplayAddToCart}</Grow>
        </Box>
    );
};
