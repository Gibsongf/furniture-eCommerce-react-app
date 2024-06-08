import "./App.css";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";
function App() {
    return (
        <>
            <Nav />
            {/* <Home /> */}
            <Shop />
            <Footer />
        </>
    );
}

export default App;
