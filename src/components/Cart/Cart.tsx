import { ServiceBenefits } from "../Shop/ServiceBenefits";
import { ShopHeader } from "../Shop/ShopHeader";
import { Box, Grid, Typography } from "@mui/material";
import { CartProduct } from "../Products/CartProduct";
import { CheckOutCard } from "./CheckOutCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../App";

// need to separate some components, a lot stuffs in one place
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
      //   padding: "0.8vw 1.7vw",
      //   textAlign: align[index],
    };
    return style;
  };
  const ProductInCart = () => {
    // console.log(products);
    const keys = Object.keys(products);
    if (!keys.length) return <></>;
    return keys.map((k, i) => {
      return <CartProduct key={i} product={products[k]} />;
    });
  };
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          padding: "20px",
        }}>
        <Box
          sx={
            {
              // display: "grid",
              // gridTemplateColumns: "1fr 1fr",
            }
          }>
          <Box
            sx={{
              gridColumn: "1",
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
          <ProductInCart />
        </Box>
        <Box
        //   sx={{
        //     gridColumn: "2",
        //   }}
        >
          <CheckOutCard />
        </Box>
      </Box>
    </Box>
  );
};

export default function Cart() {
  return (
    <>
      {" "}
      <ShopHeader pageName="Cart" />
      <CartContent />
      <ServiceBenefits />
    </>
  );
}
