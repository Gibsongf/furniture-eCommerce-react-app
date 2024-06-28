import { Stack, Button, IconButton, Grid } from "@mui/material";
import { Person2, ShoppingCart, Search } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material";
import { themeNav } from "./Theme";
import SearchInput from "./Menu";
import { Link } from "react-router-dom";
import "../App.css";

//when in mobile this nav is weird and use more than 100vw
const Menu = () => {
    return (
        <Stack
            justifyContent={"center"}
            direction="row"
            spacing={6}
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
    return (
        <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-evenly"
            flexWrap={"wrap"}>
            <SearchInput />
            <Link to="cart">
                <IconButton aria-label="shopping-cart">
                    {/* change to mui badge */}

                    <ShoppingCart fontSize="large" sx={{ fill: "black" }} />
                </IconButton>
            </Link>
        </Stack>
    );
};
export const Nav = () => {
    return (
        <ThemeProvider theme={themeNav}>
            <Grid
                sx={{
                    margin: "0",
                    fontWeight: "bold",
                    "& .MuiGrid-item": { padding: "0" },
                    width: "99vw",
                }}
                container
                spacing={3}
                alignItems={"center"}>
                <Grid item xs>
                    <Button variant="text">LOGO</Button>
                </Grid>
                <Grid item xs={5}>
                    <Menu />
                </Grid>
                <Grid item xs>
                    <IconMenu />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
