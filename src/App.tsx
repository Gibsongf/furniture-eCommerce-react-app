import { CheckOut } from "./components/Checkout/Checkout";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";
import { ProductDetails } from "./Pages/ProductDetails";
import "./App.css";
import { Stack } from "@mui/material";

//need to make all pages look alike at the side space of the whole page
function App() {
    // a object context cart ?
    return (
        <>
            <Nav />

            <Stack alignItems="center" padding="10px 100px" gap="30px">
                {/* <Home /> */}
                <Shop />
                {/* <ProductDetails /> */}
                {/* <Cart /> */}
                {/* <CheckOut /> */}
            </Stack>
            <Footer />
        </>
    );
}

export default App;
