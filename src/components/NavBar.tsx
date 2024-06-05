import {
    Stack,
    Button,
    IconButton,
    TextField,
    InputAdornment,
} from "@mui/material";
import { Person2, ShoppingCart, Search } from "@mui/icons-material";
import "../App.css";

const Menu = () => {
    return (
        <Stack
            // sx={{ border: "black 1px solid" }}
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
const SearchInput = () => {
    return (
        <TextField
            id="search-nav"
            type="search"
            variant="standard"
            sx={{ maxWidth: "50%" }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search fontSize="large" sx={{ fill: "black" }} />
                    </InputAdornment>
                ),
            }}
        />
    );
};
const IconMenu = () => {
    return (
        <Stack
            direction="row"
            justifyContent={"right"}
            alignItems={"center"}
            spacing={7}
        >
            <IconButton aria-label="user">
                <Person2 fontSize="large" sx={{ fill: "black" }} />
            </IconButton>
            <SearchInput />
            <IconButton aria-label="shopping-cart">
                <ShoppingCart fontSize="large" sx={{ fill: "black" }} />
            </IconButton>
        </Stack>
    );
};
export const Nav = () => {
    return (
        <Stack
            sx={{ border: "black 1px solid" }}
            justifyContent={"space-evenly"}
            direction="row"
            spacing={5}
        >
            <Button variant="text">LOGO</Button>
            <Menu />
            <IconMenu />
        </Stack>
    );
};
