import { Box, Typography } from "@mui/material";
// import { fakeProducts } from "../../utils";
import DeleteIcon from "@mui/icons-material/Delete";
import { Product } from "./ProductCard";
import { ChangeEvent, useContext, useState } from "react";
import { ShoppingCartContext } from "../../App";
import { formattedValuesToUsd } from "../../utils";

// export interface Product {
//     name: string;
//     price: number;
//     src: string;
//     description: string;
//     preview: string;
//     quantity: number;
//     newProduct?: boolean;
//     discount?: string;
//     total?: number;
// }

export const CartProduct = ({ product }: { product: Product }) => {
    const { name, src, price, quantity, discount } = product;
    const [productQuantity, setQuantity] = useState(quantity);
    const { updateProduct, removeProduct } = useContext(ShoppingCartContext);
    const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setQuantity(val);
        updateProduct(name, "quantity", val);
    };
    const handleRemove = () => {
        removeProduct(name);
    };
    const align: string[] = [
        "left",
        "left",
        "left",
        "center",
        "center",
        "center",
    ];
    const productStyle = (col: number) => {
        const index = col - 1;

        const style: object = {
            gridColumn: col,
            alignContent: "center",
            padding: "0.8vw 1.7vw",
            textAlign: align[index],
            justifyContent: "center",
        };
        return style;
    };
    const discountVal = () => {
        if (discount) {
            const dec = discount / 100;
            const dis = dec * price;
            const sub = price - dis;
            return formattedValuesToUsd(sub * quantity);
        }
        return formattedValuesToUsd(price * quantity);
    };

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(6, minmax(50px, 1fr))",
                marginBottom: "15vh",
                alignItems: "center",
            }}>
            <img
                style={{
                    width: "100%",
                    maxWidth: "130px",
                    height: "100%",
                    maxHeight: "130px",
                    gridColumn: "1",
                    borderRadius: "15px",
                }}
                src={src[0]}
                alt="title"
                srcSet=""
            />
            <Typography
                variant="subtitle1"
                component="h1"
                color={"#9F9F9F"}
                sx={productStyle(2)}>
                {name}
            </Typography>
            <Typography
                variant="subtitle1"
                component="h2"
                fontWeight="bold"
                color={"#9F9F9F"}
                sx={productStyle(3)}>
                {formattedValuesToUsd(price)}
            </Typography>
            <input
                style={{
                    gridColumn: "4",
                    alignContent: "center",
                    padding: "0.8vw 0.5vw",
                    textAlign: "center",
                    alignSelf: "center",
                    justifySelf: "center",
                    width: "50%",
                }}
                type="number"
                name="quantity"
                id="cart-item-quantity"
                min={1}
                max={10}
                value={productQuantity}
                onChange={handleQuantity}
            />
            <Typography
                variant="subtitle1"
                component="h3"
                fontWeight="bold"
                sx={productStyle(5)}>
                {discountVal()}
            </Typography>
            <DeleteIcon
                fontSize="large"
                sx={{
                    width: "100%",
                    gridColumn: "6",
                    color: "#B88E2F",
                }}
                onClick={handleRemove}
            />
        </Box>
    );
};
