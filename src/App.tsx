import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";
// import { ProductDetails } from "./Pages/ProductDetails";
import "./App.css";
import { Stack } from "@mui/material";
// import { Contact } from "./components/Contact/Contact";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { createContext } from "react";
import { useCart } from "./components/ShopCart";
import { Product } from "./components/Products/ProductCard";
export const ShoppingCartContext = createContext({
    products: {},
    addProduct: (product: Product) => {},
    removeProduct: (product: Product) => {},
    updateProduct: (name: string, key: string, value) => {},
    iconQuantity: 0,
});
function App() {
    const { addProduct, removeProduct, products, iconQuantity, updateProduct } =
        useCart();
    //
    //todo
    //routes
    // a object context cart
    //side bar cart with items
    //remove context outlet and do a normal context is more easy than this for now
    return (
        <>
            <Nav />
            <Stack alignItems="center" padding="0px 100px" gap="30px">
                <ScrollRestoration />
                <ShoppingCartContext.Provider
                    value={{
                        addProduct,
                        removeProduct,
                        products,
                        iconQuantity,
                        updateProduct,
                    }}>
                    <Outlet />
                </ShoppingCartContext.Provider>
            </Stack>
            <Footer />
        </>
    );
}

export default App;
