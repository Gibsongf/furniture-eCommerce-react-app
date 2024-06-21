import {
    Stack,
    Button,
    IconButton,
    TextField,
    InputAdornment,
    Grid,
} from "@mui/material";
import { Person2, ShoppingCart, Search } from "@mui/icons-material";
import "../App.css";
import { ThemeProvider } from "@mui/material";
import { themeNav } from "./Theme";

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
const SearchInput = () => {
    const borderColor = { borderColor: "#B88E2F" };
    return (
        <TextField
            id="search-nav"
            type="search"
            variant="standard"
            sx={{
                width: "40%",
                border: "0",
                "& .MuiInput-root:before": { borderColor: "#black" },
                "& .MuiInput-root:hover:before": borderColor,
                "& .MuiInput-root::after": borderColor,
            }}
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
