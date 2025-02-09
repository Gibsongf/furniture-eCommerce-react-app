import { Box, Typography, Button, ThemeProvider, Divider } from "@mui/material";
import { themePlaceOrder } from "../Theme";
import { useContext } from "react";
import { ShoppingCartContext } from "../../App";
import { useCartPrices } from "../../utils";

const BoxProductNamePrice = ({
    name,
    price,
    quantity,
}: {
    name: string;
    price: number;
    quantity: number;
}) => {
    return (
        <Box display="flex" justifyContent="space-between" marginBottom="15px">
            <Typography variant="subtitle1" component="h2" color={"#9F9F9F"}>
                {name}
                <span style={{ color: "black" }}> x ({quantity})</span>
            </Typography>
            <Typography variant="h5" component="h2">
                ${price}
            </Typography>
        </Box>
    );
};
export const PlaceOrder = () => {
    // props Subtotal, Total, discount
    const { subtotal, total } = useCartPrices();

    const { products } = useContext(ShoppingCartContext);

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
            {Object.keys(products).map((key, indx) => {
                return (
                    <BoxProductNamePrice
                        key={indx}
                        name={products[key].name}
                        price={products[key].price}
                        quantity={products[key].quantity}
                    />
                );
            })}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginBottom="15px">
                <Typography variant="subtitle1" component="h2">
                    Subtotal
                </Typography>
                <Typography variant="h6" component="h2">
                    {subtotal}
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
                    {total}
                </Typography>
            </Box>
            <Divider orientation="horizontal" />
            <ThemeProvider theme={themePlaceOrder}>
                <Button>Place Order</Button>
            </ThemeProvider>
        </Box>
    );
};
