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
          padding: "10px 20px",
          width: "max-content",
          textAlign: "center",
          fontSize: "1.1rem",
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
          ":hover": hover,
          padding: "10px 20px",
          maxWidth: "max-content",
          marginBottom: "15px",
          color: "black",
          placeSelf: "center",
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
          fontSize: "1.3rem",
          border: "solid black 1px",
          borderRadius: "15px",
          textTransform: "none",
          color: "black",
          ":hover": {
            backgroundColor: "#fff3e34a",
            borderColor: primaryColor,
          },
          padding: "5px 30px 5px 30px",
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
