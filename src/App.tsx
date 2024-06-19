import { CheckOut } from "./components/Checkout/Checkout";
// import Cart from "./Pages/Cart";
// import Home from "./Pages/Home";
// import Shop from "./Pages/Shop";
import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";
import "./App.css";

// import { ProductDetails } from "./Pages/ProductDetails";
function App() {
    // a object context cart ?
    return (
        <>
            <Nav />
            {/* <Home /> */}
            {/* <Shop /> */}
            {/* <ProductDetails /> */}
            {/* <Cart /> */}
            <CheckOut />

            <Footer />
        </>
    );
}

export default App;
