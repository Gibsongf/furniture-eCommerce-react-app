import "./App.css";
import Cart from "./components/Cart/Cart";
// import Home from "./Pages/Home";
// import Shop from "./Pages/Shop";
import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";
// import { ProductDetails } from "./Pages/ProductDetails";
function App() {
    // a object context cart ?
    return (
        <>
            <Nav />
            {/* <Home /> */}
            {/* <Shop /> */}
            {/* <ProductDetails /> */}
            <Cart />
            <Footer />
        </>
    );
}

export default App;
