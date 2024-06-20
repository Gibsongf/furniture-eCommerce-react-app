import { CheckOut } from "./components/Checkout/Checkout";
// import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
// import Shop from "./Pages/Shop";
import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";
// import { ProductDetails } from "./Pages/ProductDetails";
import "./App.css";

//need to make all pages look alike at the side space of the whole page
function App() {
    // a object context cart ?
    return (
        <>
            <Nav />
            <Home />
            {/* <Shop /> */}
            {/* <ProductDetails /> */}
            {/* <Cart /> */}
            {/* <CheckOut /> */}

            <Footer />
        </>
    );
}

export default App;
