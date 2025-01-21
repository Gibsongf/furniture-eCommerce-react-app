import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Button, IconButton } from "@mui/material";
import Grow from "@mui/material/Grow";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import { Product } from "./ProductCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../App";
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

type CallBackCart = (product: Product) => void;
//shop button add to cart
export const ShopAddToCart = ({
    show,
    product,
}: {
    show: boolean;
    product: Product;
}) => {
    // on click action to add to cart and update nums of product
    const { addProduct } = useContext(ShoppingCartContext);
    const addCart = () => {
        addProduct(product);
    };
    const saveProductInfo = () => {
        // save in browser
        localStorage.setItem("selected-product", JSON.stringify(product));
    };

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
                gap: "15px",
            }}>
            {/*a onClick func to add to cart */}
            <ThemeProvider theme={theme}>
                <Button
                    sx={{
                        backgroundColor: "white",
                        color: "#B88E2F",
                    }}
                    disableElevation={true}
                    variant="text"
                    onClick={addCart}>
                    Add to cart
                </Button>
                <IconButton
                    aria-label="shopping-cart"
                    onClick={saveProductInfo}>
                    {/* here the id of the product as url */}
                    <Link to={`/product/${product.name}`}>
                        <AddCircleOutlineIcon
                            fontSize="large"
                            sx={{ fill: "white" }}
                        />
                    </Link>
                </IconButton>
            </ThemeProvider>
        </Box>
    );
    return (
        <Box>
            <Grow {...(show ? { timeout: 150 } : {})} in={show}>
                {DisplayAddToCart}
            </Grow>
        </Box>
    );
};
