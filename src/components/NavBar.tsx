import { Stack, Button, IconButton, Box } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material";
import { themeNav } from "./Theme";
// import SearchInput from "./Menu";
import { Link } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../App";
import Badge from "@mui/material/Badge";
import { themePaletteColor } from "./Theme";

const Menu = () => {
  return (
    <Stack
      gap={"30px"}
      justifyContent={"center"}
      direction="row"
      flexWrap={"wrap"}>
      <Link to="/">
        <Button variant="text">Home</Button>
      </Link>
      <Link to="shop">
        <Button variant="text">Shop</Button>
      </Link>
      <Link to="contact">
        <Button variant="text">Contact</Button>
      </Link>
    </Stack>
  );
};

const IconMenu = () => {
  const { iconQuantity } = useContext(ShoppingCartContext);
  return (
    <Stack direction="row" alignItems={"center"} flexWrap={"wrap"}>
      <Link to="cart">
        <ThemeProvider theme={themePaletteColor}>
          <IconButton aria-label="shopping-cart">
            <Badge badgeContent={iconQuantity} color="primary">
              <ShoppingCart fontSize="large" sx={{ fill: "black" }} />
            </Badge>
          </IconButton>
        </ThemeProvider>
      </Link>
    </Stack>
  );
};
export const Nav = () => {
  const style = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  };
  return (
    <ThemeProvider theme={themeNav}>
      <Box sx={style}>
        <Button variant="text">LOGO</Button>
        <Menu />
        <IconMenu />
      </Box>
    </ThemeProvider>
  );
};
