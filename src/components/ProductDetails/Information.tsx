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
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../App";
import { formattedValuesToUsd } from "../../utils";

const DetailsAction = () => {
  const { addProduct, selectProduct } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(1);
  const onClickAdd = () => {
    selectProduct.quantity = quantity;
    addProduct(selectProduct);
  };
  return (
    <Box
      className="product-buttons container"
      display="flex"
      flexDirection="row"
      alignItems="center"
      flexWrap="wrap"
      gap="20px">
      <QuantityInput quantity={quantity} setQuantity={setQuantity} />

      <ThemeProvider theme={themeInformation}>
        <Button onClick={onClickAdd} variant="outlined">
          Add To Cart
        </Button>
      </ThemeProvider>
    </Box>
  );
};
const Information = () => {
  const { selectProduct } = useContext(ShoppingCartContext);

  return (
    <Box
      className="product-content container"
      display="flex"
      flexDirection={"column"}
      textAlign="left"
      justifyContent="space-evenly">
      <Typography variant="h2" component="h1">
        {selectProduct.name}
      </Typography>
      <Typography color={"#9F9F9F"} variant="h4" component="h5">
        {formattedValuesToUsd(selectProduct.price)}
      </Typography>
      <Box
        className="product-rating container"
        display="flex"
        alignItems="center"
        flexDirection="row"
        gap="10px">
        <Rating name="half-rating" defaultValue={3} precision={1} readOnly />
        <Divider orientation="vertical" flexItem />
        <Typography color={"#9F9F9F"} variant="subtitle1" component="h5">
          rate info
        </Typography>
      </Box>
      <Box className="product-description container" maxWidth="40ch">
        <Typography variant="subtitle1" component="h6">
          {selectProduct.description}
        </Typography>
      </Box>
      <DetailsAction />
    </Box>
  );
};
export default Information;
