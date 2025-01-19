import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";
// import { ProductDetails } from "./Pages/ProductDetails";
import "./App.css";
import { Stack } from "@mui/material";
// import { Contact } from "./components/Contact/Contact";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { createContext } from "react";
import { useCart } from "./components/ShopCart";

export const ShoppingCart = createContext({
    products: {},
    updateProducts: () => {},
    changeProductQuantity: () => {},
    removeProduct: () => {},
    iconQuantity: 0,
    total: 0,
});
function App() {
    const cart = useCart();
    //
    //todo
    //routes
    // a object context cart
    //side bar cart with items
    return (
        <>
            <Nav />
            <Stack alignItems="center" padding="0px 100px" gap="30px">
                <ScrollRestoration />
                <Outlet context={[cart.addProduct]} />
            </Stack>
            <Footer />
        </>
    );
}

export default App;
