import CartComponent from "./components/CartComponent";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/cart" element={<CartComponent />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
