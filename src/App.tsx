import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";
// import { ProductDetails } from "./Pages/ProductDetails";
import "./App.css";
import { Stack } from "@mui/material";
// import { Contact } from "./components/Contact/Contact";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { createContext } from "react";
import { useCart } from "./components/useCart";
import { Product } from "./components/Products/ProductCard";
type ProductState = {
    [key: string]: Product;
};
export const ShoppingCartContext = createContext<{
    products: ProductState;
    addProduct: (product: Product) => void;
    removeProduct: (name: string) => void;
    updateProduct: (name: string, key: string, value: number | string) => void;
    iconQuantity: number;
    selectProduct: Product;
    setSelectProduct: (product: Product) => void;
}>({
    products: {}, // Provide an empty object as the default value for products
    addProduct: () => {},
    removeProduct: () => {},
    updateProduct: () => {},
    iconQuantity: 0,
    selectProduct: {},
    setSelectProduct: () => {},
});
function App() {
    const {
        addProduct,
        removeProduct,
        products,
        iconQuantity,
        updateProduct,
        selectProduct,
        setSelectProduct,
    } = useCart();
    //
    //todo
    //routes
    // a object context cart
    //side bar cart with items
    //remove context outlet and do a normal context is more easy than this for now
    return (
        <>
            <ShoppingCartContext.Provider
                value={{
                    addProduct,
                    removeProduct,
                    products,
                    iconQuantity,
                    updateProduct,
                    selectProduct,
                    setSelectProduct,
                }}>
                <Nav />
                <Stack alignItems="center" padding="0px 50px" gap="20px">
                    <ScrollRestoration />

                    <Outlet />
                </Stack>
            </ShoppingCartContext.Provider>

            <Footer />
        </>
    );
}

export default App;
