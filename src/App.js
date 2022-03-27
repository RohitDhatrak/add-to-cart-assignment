import { Routes, Route } from "react-router-dom";
import { ProductListing, Cart } from "./pages";
import { Header } from "./components";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ProductListing />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
