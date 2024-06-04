import { Stack, Button, IconButton } from "@mui/material";
import { Person2, ShoppingCart, Search } from "@mui/icons-material";
import "../App.css";

//Header has a logo at far right
// list o menu = homes shop about contact - middle
//list of icon user search and cart far left
//Stack of material UI
//can try it with menu and icon too
const Menu = () => {
    return (
        <Stack
            sx={{ border: "black 1px solid" }}
            justifyContent={"center"}
            direction="row"
            spacing={6}
        >
            <Button variant="text">Home</Button>
            <Button variant="text">Shop</Button>
            <Button variant="text">About</Button>
            <Button variant="text">Contact</Button>
        </Stack>
    );
};
const IconMenu = () => {
    return (
        <Stack
            sx={{ border: "black 1px solid", fontFamily: "Poppins" }}
            direction="row"
            justifyContent={"right"}
            spacing={7}
        >
            {/* <Button variant="text">User</Button> */}
            <IconButton aria-label="user">
                <Person2 fontSize="large" sx={{ fill: "black" }} />
            </IconButton>
            <IconButton aria-label="search">
                <Search fontSize="large" sx={{ fill: "black" }} />
            </IconButton>
            <IconButton aria-label="shopping-cart">
                <ShoppingCart fontSize="large" sx={{ fill: "black" }} />
            </IconButton>
            {/* <Button variant="text">Search</Button> */}
            {/* <Button variant="text">Cart</Button> */}
        </Stack>
    );
};
export const Nav = () => {
    return (
        <Stack justifyContent={"space-evenly"} direction="row" spacing={5}>
            <Button variant="text">LOGO</Button>
            <Menu />
            <IconMenu />
        </Stack>
    );
};
