import "./App.css";
import Home from "./Pages/Home";
import { Footer } from "./components/Footer";
import { Nav } from "./components/NavBar";
function App() {
    return (
        <>
            <Nav />
            <Home />
            <Footer />
        </>
    );
}

export default App;
