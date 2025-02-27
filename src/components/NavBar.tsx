import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../feature/ContextProvider";
import { useContext } from "react";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="flex justify-between px-16 p-6 bg-gray-400">
      <Link to="/" className="text-gray-800 font-bold text-2xl">
        Shop
      </Link>
      <Link
        to="/cart"
        className="font-bold flex text-2xl text-orange-500 space-x-1"
      >
        <BsCart className="mt-1" />
        <span className="text-gray-50">{cart.length}</span>
      </Link>
    </div>
  );
};

export default NavBar;
