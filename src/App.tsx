import "./App.css";
import { Banner } from "./components/Home/Banner";
import { Categories } from "./components/Home/HomeCategory";
import { Nav } from "./components/NavBar";
function App() {
    return (
        <>
            <Nav />
            <Banner />
            <Categories />
        </>
    );
}

export default App;
