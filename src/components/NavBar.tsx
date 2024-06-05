import {
    Stack,
    Button,
    IconButton,
    TextField,
    InputAdornment,
    Grid,
    Box,
} from "@mui/material";
import { Person2, ShoppingCart, Search } from "@mui/icons-material";
import "../App.css";

const Menu = () => {
    return (
        <Stack justifyContent={"center"} direction="row" spacing={6}>
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
            alignItems={"center"}
            justifyContent="space-evenly">
            <SearchInput />
            <IconButton aria-label="user">
                <Person2 fontSize="large" sx={{ fill: "black" }} />
            </IconButton>
            <IconButton aria-label="shopping-cart">
                <ShoppingCart fontSize="large" sx={{ fill: "black" }} />
            </IconButton>
        </Stack>
    );
};
export const Nav = () => {
    return (
        <Grid container spacing={3} alignItems={"center"}>
            <Grid item xs>
                <Button variant="text">LOGO</Button>
            </Grid>
            <Grid item xs={6}>
                <Menu />
            </Grid>
            <Grid item xs>
                <IconMenu />
            </Grid>
        </Grid>
    );
};
