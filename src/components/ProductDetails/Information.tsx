import {
    Box,
    Button,
    Divider,
    Rating,
    ThemeProvider,
    Typography,
} from "@mui/material";
import QuantityInput from "./QuantityInput";
import { themeInformation } from "../Theme";
import { Product } from "../ShopCart";
import { useContext } from "react";
import { ShoppingCartContext } from "../../App";

const DetailsAction = () => {
    // add cart on click
    // compare on click
    const { addProduct } = useContext(ShoppingCartContext);

    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            flexWrap="wrap"
            width="100%"
            gap="20px">
            <QuantityInput />

            <ThemeProvider theme={themeInformation}>
                <Button variant="outlined" type="text">
                    Add To Cart
                </Button>
            </ThemeProvider>
        </Box>
    );
};
const Information = () => {
    // {name, value, overallRating, numsOfReview, description}
    const storedProduct = localStorage.getItem("selected-product");
    let detailsProduct = {
        name: "null",
        price: "null",
        description: "null",
    };

    // Parse and assign only if storedProduct exists
    if (storedProduct) {
        detailsProduct = JSON.parse(storedProduct);
    }
    return (
        <Box
            display="flex"
            flexDirection={"column"}
            textAlign="left"
            gap="30px"
            width="100%">
            <Typography variant="h2" component="h1">
                {detailsProduct.name}
            </Typography>
            <Typography color={"#9F9F9F"} variant="h4" component="h5">
                {detailsProduct.price}
            </Typography>
            <Box display="flex" flexDirection="row" gap="10px">
                <Rating
                    name="half-rating"
                    defaultValue={3}
                    precision={1}
                    readOnly
                />
                <Divider orientation="vertical" flexItem />
                <Typography
                    color={"#9F9F9F"}
                    variant="subtitle1"
                    component="h5">
                    rate info
                </Typography>
            </Box>
            <Box width="80%">
                <Typography variant="subtitle1" component="h6">
                    {detailsProduct.description}
                </Typography>
            </Box>
            <DetailsAction />
        </Box>
    );
};
export default Information;
