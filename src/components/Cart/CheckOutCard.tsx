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

export const CheckOutCard = () => {
    // props Subtotal, Total, discount
    const { products } = useContext(ShoppingCartContext);
    const subtotal = Object.values(products).reduce(
        (sum, product) => sum + product.price * (product.quantity || 1),
        0
    );
    const formattedValues = (val: number) => {
        return val.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    const getTotal = () => {
        let total = 0;
        Object.keys(products).forEach((k) => {
            if (products[k]?.discount) {
                const dec = products[k].discount / 100;
                const dis = dec * products[k].price;
                const sub = products[k].price - dis;
                total += sub * products[k].quantity;
            }
        });
        return total;
    };
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
                    {formattedValues(subtotal)}
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
                    {formattedValues(getTotal())}
                </Typography>
            </Box>
            <ThemeProvider theme={themeCheckOut}>
                <Button>Check Out</Button>
            </ThemeProvider>
        </Box>
    );
};
