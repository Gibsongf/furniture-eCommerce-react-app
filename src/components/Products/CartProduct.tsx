import { Box, Typography } from "@mui/material";
import { fakeProducts } from "../../utils";
import DeleteIcon from "@mui/icons-material/Delete";

const { name, src, price } = fakeProducts[0];

export const CartProduct = () => {
    // props = name, imgSrc, price, quantity, subtotal?
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
                src={src}
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
                {price}
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
            />
            <Typography
                variant="subtitle1"
                component="h3"
                fontWeight="bold"
                sx={productStyle(5)}>
                10003
            </Typography>
            <DeleteIcon
                fontSize="large"
                sx={{
                    width: "100%",
                    gridColumn: "6",
                    color: "#B88E2F",
                }}
            />
        </Box>
    );
};
