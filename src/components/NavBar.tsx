import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../feature/ContextProvider";
import { useContext } from "react";
import ButtonNav from "./ButtonNav";

const NavBar = () => {
  const { cart } = useContext(CartContext) || { cart: [] };

  return (
    <div className="flex justify-between items-center px-8 md:px-16 py-4 bg-gradient-to-r from-gray-800 to-gray-600 shadow-md">
      {/* Logo */}
      <div>
        <Link to="/" className="text-white font-extrabold text-2xl md:text-3xl tracking-wide">
          Shop<span className="text-orange-400">Zone</span>
        </Link>
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex space-x-6">
        <ButtonNav />
      </div>

      {/* Cart Icon */}
      <div className="relative flex items-center">
        <Link
          to="/cart"
          className="flex items-center text-white hover:text-orange-400 transition transform hover:scale-105"
        >
          <BsCart className="text-2xl md:text-3xl" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
