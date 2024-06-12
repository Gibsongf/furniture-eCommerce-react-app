import "./App.css";
// import Home from "./Pages/Home";
// import Shop from "./Pages/Shop";
import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
function App() {
    return (
        <>
            <Nav />
            {/* <Home /> */}
            {/* <Shop /> */}
            <ProductDetails />
            <Footer />
        </>
    );
}

export default App;
