import {
    Box,
    Button,
    Divider,
    Rating,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { Product } from "../Products/ProductCard";
import QuantityInput from "./QuantityInput";
import { themeInformation } from "../Theme";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../App";
import { formattedValuesToUsd } from "../../utils";

const DetailsAction = ({ product }: { product: Product }) => {
    const { addProduct, selectProduct } = useContext(ShoppingCartContext);
    const [quantity, setQuantity] = useState(1);
    const onClickAdd = () => {
        selectProduct.quantity = quantity;
        addProduct(selectProduct);
    };
    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            flexWrap="wrap"
            width="100%"
            gap="20px">
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />

            <ThemeProvider theme={themeInformation}>
                <Button onClick={onClickAdd} variant="outlined" type="text">
                    Add To Cart
                </Button>
            </ThemeProvider>
        </Box>
    );
};
const Information = () => {
    // {name, value, overallRating, numsOfReview, description}
    const { selectProduct } = useContext(ShoppingCartContext);

    return (
        <Box
            display="flex"
            flexDirection={"column"}
            textAlign="left"
            gap="30px"
            width="100%">
            <Typography variant="h2" component="h1">
                {selectProduct.name}
            </Typography>
            <Typography color={"#9F9F9F"} variant="h4" component="h5">
                {formattedValuesToUsd(selectProduct.price)}
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
                    {selectProduct.description}
                </Typography>
            </Box>
            <DetailsAction product={selectProduct} />
        </Box>
    );
};
export default Information;
