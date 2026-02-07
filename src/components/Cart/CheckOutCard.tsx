import { Box, Typography, Button, ThemeProvider } from "@mui/material";
import { themeCheckOut } from "../Theme";
import { useCartPrices } from "../../utils";
import { Link } from "react-router-dom";

export const CheckOutCard = () => {
  const { subtotal, total } = useCartPrices();
  return (
    <Box
      className="checkout container"
      sx={{
        backgroundColor: "#fae8d1",
        padding: "20px 30px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <Typography
        className="checkout title"
        variant="h5"
        component="h1"
        fontWeight="bold"
        sx={{ marginBottom: "15px" }}>
        Cart Total
      </Typography>
      <Box display="flex" justifyContent="space-between" marginBottom="10px">
        <Typography
          className="checkout subtotal-title"
          fontWeight="bold"
          variant="subtitle1"
          component="h2">
          Subtotal
        </Typography>
        <Typography
          className="checkout subtotal-value"
          color={"#9F9F9F"}
          variant="subtitle1"
          component="h2">
          {subtotal}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="20px">
        <Typography
          className="checkout total-title"
          fontWeight="bold"
          variant="subtitle1"
          component="h2">
          Total
        </Typography>
        <Typography
          className="checkout total-value"
          color={"#B88E2F"}
          variant="h5"
          component="h2">
          {total}
        </Typography>
      </Box>
      <ThemeProvider theme={themeCheckOut}>
        <Link className="link-checkout button" to="/checkout">
          <Button> Check Out</Button>
        </Link>
      </ThemeProvider>
    </Box>
  );
};
