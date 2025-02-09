import {
    Box,
    Typography,
    Button,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import { themeCheckOut } from "../Theme";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../App";
import { formattedValuesToUsd, useCartPrices } from "../../utils";
import { Link } from "react-router-dom";

export const CheckOutCard = () => {
    // props Subtotal, Total, discount
    const { subtotal, total } = useCartPrices();
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
                    {subtotal}
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
                    {total}
                </Typography>
            </Box>
            <ThemeProvider theme={themeCheckOut}>
                <Link to="/checkout">
                    <Button> Check Out</Button>
                </Link>
            </ThemeProvider>
        </Box>
    );
};
