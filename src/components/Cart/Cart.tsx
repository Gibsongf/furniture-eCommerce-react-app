import { ServiceBenefits } from "../Shop/ServiceBenefits";
import { ShopHeader } from "../Shop/ShopHeader";
import { Box, Grid, Typography } from "@mui/material";
import { CartProduct } from "../Products/CartProduct";
import { CheckOutCard } from "./CheckOutCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../App";

// need to separate some components, we have to much stuffs in one place
export const CartContent = () => {
    const { products } = useContext(ShoppingCartContext);
    const align: string[] = [
        "left",
        "left",
        "left",
        "center",
        "center",
        "center",
    ];
    const headerStyle = (col: number) => {
        const index = col - 1;
        const style: object = {
            gridColumn: col,
            gridRow: "1",
            backgroundColor: "#F9F1E7",
            alignContent: "center",
            fontWeight: "bold",
            padding: "0.8vw 1.7vw",
            textAlign: align[index],
        };
        return style;
    };
    const ProductInCart = () => {
        // console.log(products);
        const keys = Object.keys(products);
        if (!keys.length) return <></>;
        return keys.map((k, i) => {
            // console.log(products[k]);
            return <CartProduct key={i} product={products[k]} />;
        });
    };
    return (
        <Grid
            container
            justifyContent={"space-between"}
            // gap={5}
            sx={{
                marginTop: "70px",
                marginBottom: "40px",
                width: "90%",
            }}>
            <Grid item xs={8}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(6, minmax(50px, 1fr))",
                        marginBottom: "50px",
                    }}>
                    <Typography sx={headerStyle(1)}></Typography>
                    <Typography sx={headerStyle(2)}>Product</Typography>
                    <Typography sx={headerStyle(3)}>Price</Typography>
                    <Typography sx={headerStyle(4)}>Quantity</Typography>
                    <Typography sx={headerStyle(5)}>Subtotal</Typography>
                    <Typography sx={headerStyle(6)}></Typography>
                </Box>
                {/* here a map with the product list  */}
                <ProductInCart />
            </Grid>
            <Grid item xs={3}>
                <CheckOutCard />
            </Grid>
        </Grid>
    );
};

export default function Cart() {
    return (
        <>
            {" "}
            <ShopHeader />
            <CartContent />
            <ServiceBenefits />
        </>
    );
}
