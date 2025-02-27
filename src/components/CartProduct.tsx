import { useCart } from "../feature/ContextProvider";
import { CartItem } from "../feature/ContextProvider";

const CartProduct = ({ product }: { product: CartItem }) => {
  const { dispatch } = useCart();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex items-center gap-6 border border-gray-200">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-24 h-24 rounded-md object-cover border"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="text-gray-700 text-sm mt-1">Price: ${product.price}</p>

        <div className="flex items-center mt-3 space-x-4">
          <button onClick={() => dispatch({ type: "DECREASE", id: product.id })} className="w-8 h-8 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">-</button>
          <span>{product.quantity}</span>
          <button onClick={() => dispatch({ type: "INCREASE", id: product.id })} className="w-8 h-8 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">+</button>
        </div>
      </div>

      <button onClick={() => dispatch({ type: "REMOVE", id: product.id })} className="text-red-600 hover:text-red-800 transition">
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
