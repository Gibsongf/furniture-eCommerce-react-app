import { createTheme } from "@mui/material";
const primaryColor: string = "#B88E2F";

const hover: object = {
    backgroundColor: "#fff3e34a",
    borderColor: primaryColor,
    color: primaryColor,
};
export const themeNav = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.1rem",
                    ":hover": hover,
                    fontWeight: "bold",
                    textTransform: "none",
                    color: "black",
                },
            },
        },
    },
});
export const themeBanner = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#B88E2F",
                    color: "white",
                    fontWeight: "bold",
                    padding: "0",
                    width: "40%",
                    textAlign: "center",
                    ":hover": { backgroundColor: "#a37819" },
                },
            },
        },
    },
});

export const themeCheckOut = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.1rem",
                    border: "solid black 1px",
                    borderRadius: "15px",
                    textTransform: "none",
                    width: "100%",
                    ":hover": hover,
                    padding: "4% 1%",
                    marginBottom: "15px",
                    color: "black",
                },
            },
        },
    },
});

export const themePlaceOrder = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.1rem",
                    border: "solid black 1px",
                    borderRadius: "15px",
                    textTransform: "none",
                    width: "70%",
                    ":hover": hover,
                    padding: "3%",
                    marginTop: "35px",
                    color: "black",
                },
            },
        },
    },
});
export const themeInformation = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.5rem",
                    border: "solid black 1px",
                    borderRadius: "15px",
                    textTransform: "none",
                    color: "black",
                    ":hover": {
                        backgroundColor: "#fff3e34a",
                        borderColor: primaryColor,
                    },
                    padding: "10px 45px 10px 45px",
                },
            },
        },
    },
});
export const themeAddCartHover = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.2rem",
                    textTransform: "none",
                    ":hover": {
                        border: `${primaryColor} solid 2px`,
                        backgroundColor: "white",
                    },
                    backgroundColor: "white",
                    color: "#B88E2F",
                    padding: "10px 65px 10px 65px",
                },
            },
        },
    },
});

//Form Bill / Shop
export const themePaletteColor = createTheme({
    palette: {
        primary: { main: primaryColor },
    },
});
