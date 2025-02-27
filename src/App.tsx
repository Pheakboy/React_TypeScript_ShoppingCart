import CartComponent from "./components/CartComponent";
import CheckOutForm from "./components/CheckOutForm";
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
        <Route path="/cart/checkout" element={<CheckOutForm/>} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
