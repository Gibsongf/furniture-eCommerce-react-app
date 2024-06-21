import { Stack, Button, IconButton, Grid, Toolbar } from "@mui/material";
import { Person2, ShoppingCart, Search } from "@mui/icons-material";
import "../App.css";
import { ThemeProvider } from "@mui/material";
import { themeNav } from "./Theme";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchInput from "./Menu";

//when in mobile this nav is weird and use more than 100vw
const Menu = () => {
    return (
        <Stack
            justifyContent={"center"}
            direction="row"
            spacing={6}
            flexWrap={"wrap"}>
            <Button variant="text">Home</Button>
            <Button variant="text">Shop</Button>
            <Button variant="text">About</Button>
            <Button variant="text">Contact</Button>
        </Stack>
    );
};
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        border: "solid 1px black",
        borderRadius: "15px",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const IconMenu = () => {
    return (
        <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-evenly"
            flexWrap={"wrap"}>
            <SearchInput />
            {/* <IconButton aria-label="user">
                <Person2 fontSize="large" sx={{ fill: "black" }} />
            </IconButton> */}
            <IconButton aria-label="shopping-cart">
                {/* change to badge at mui */}
                <ShoppingCart fontSize="large" sx={{ fill: "black" }} />
            </IconButton>
        </Stack>
    );
};
export const Nav = () => {
    return (
        <ThemeProvider theme={themeNav}>
            <Grid
                sx={{ margin: "0", fontWeight: "bold" }}
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
