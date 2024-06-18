import {
    Box,
    Grid,
    Typography,
    Button,
    ThemeProvider,
    createTheme,
    TextField,
} from "@mui/material";
import { fakeProducts } from "../../utils";
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.2rem",
                    border: "solid black 1px",
                    borderRadius: "15px",
                    ":hover": {
                        backgroundColor: "#fff3e34a",
                        borderColor: "#B88E2F",
                        color: "#B88E2F",
                    },
                    textTransform: "none",
                    padding: "4% 25%",
                    marginBottom: "15px",
                    color: "black",
                },
            },
        },
    },
});
// need to separate some components, we have to much stuffs in one place
export const CartItems = () => {
    const { name, src, description, price, newProduct } = fakeProducts[0];
    const align: string[] = [
        "left",
        "left",
        "left",
        "center",
        "center",
        "center",
    ];
    const headerStyle = (col: number) => {
        const index = col - 1;
        const style: object = {
            gridColumn: col,
            gridRow: "1",
            backgroundColor: "#F9F1E7",
            alignContent: "center",
            padding: "0.8vw 1.7vw",
            textAlign: align[index],
        };
        return style;
    };
    const productStyle = (col: number) => {
        const index = col - 1;

        const style: object = {
            gridColumn: col,
            gridRow: "2",
            alignContent: "center",
            padding: "0.8vw 1.7vw",
            textAlign: align[index],
            justifyContent: "center",
        };
        return style;
    };
    return (
        <Grid
            container
            justifyContent={"center"}
            gap={5}
            sx={{
                marginTop: "70px",
                marginBottom: "70px",
            }}>
            <Grid item xs={6}>
                <Box
                    sx={{
                        display: "grid",
                        rowGap: "3vw",
                        gridTemplateColumns: "repeat(6, minmax(50px, 1fr))",
                    }}>
                    <Typography sx={headerStyle(1)}></Typography>
                    <Typography sx={headerStyle(2)}>Product</Typography>
                    <Typography sx={headerStyle(3)}>Price</Typography>
                    <Typography sx={headerStyle(4)}>Quantity</Typography>
                    <Typography sx={headerStyle(5)}>Subtotal</Typography>
                    <Typography sx={headerStyle(6)}>DEL</Typography>
                    <img
                        style={{
                            width: "100%",
                            maxWidth: "130px",
                            height: "100%",
                            maxHeight: "130px",
                            gridColumn: "1",
                            gridRow: "2",
                            borderRadius: "15px",
                        }}
                        src={src}
                        alt="title"
                        srcSet=""
                    />
                    <Typography
                        variant="subtitle1"
                        component="h1"
                        color={"#9F9F9F"}
                        sx={productStyle(2)}>
                        {name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="h2"
                        fontWeight="bold"
                        color={"#9F9F9F"}
                        sx={productStyle(3)}>
                        {price}
                    </Typography>
                    <input
                        style={{
                            gridColumn: "4",
                            gridRow: "2",
                            alignContent: "center",
                            padding: "0.8vw 0.5vw",
                            textAlign: "center",
                            alignSelf: "center",
                            justifySelf: "center",
                            width: "50%",
                        }}
                        type="number"
                        name="quantity"
                        id="cart-item-quantity"
                        min={1}
                        max={10}
                    />
                    <Typography
                        variant="subtitle1"
                        component="h3"
                        fontWeight="bold"
                        sx={productStyle(5)}>
                        1000
                    </Typography>
                    <Typography sx={productStyle(6)}>DEL</Typography>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box
                    sx={{
                        backgroundColor: "#F9F1E7",
                        padding: "8% 20% 10% 20%",
                    }}>
                    <Typography
                        variant="h5"
                        component="h1"
                        fontWeight="bold"
                        sx={{ marginBottom: "35px" }}>
                        Product
                    </Typography>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        marginBottom="30px">
                        <Typography
                            fontWeight="bold"
                            variant="subtitle1"
                            component="h2">
                            Subtotal
                        </Typography>
                        <Typography
                            color={"#9F9F9F"}
                            variant="subtitle1"
                            component="h2">
                            R$10000
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom="30px">
                        <Typography
                            fontWeight="bold"
                            variant="subtitle1"
                            component="h2">
                            Total
                        </Typography>
                        <Typography
                            color={"#B88E2F"}
                            variant="h5"
                            component="h2">
                            R$10000
                        </Typography>
                    </Box>
                    <ThemeProvider theme={theme}>
                        <Button>Check Out</Button>
                    </ThemeProvider>
                </Box>
            </Grid>
        </Grid>
    );
};
