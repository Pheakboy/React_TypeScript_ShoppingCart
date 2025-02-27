import { ProductType } from "../types/ProductType";
import { CartContext } from "../feature/ContextProvider";
import { useContext } from "react";

const ProductItem = ({ product }: { product: ProductType }) => {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD", product: product });
  };

  return (
    <div className="p-4 w-full max-w-xs">
      <a href="/" className="group relative block overflow-hidden">
        <img
          src={product.thumbnail}
          alt="thumbnail"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <p className="text-gray-700">
            ${product.price}
            <span className="text-gray-400 line-through">
              ${product.discountedTotal}
            </span>
          </p>

          <h3 className="mt-1.5 text-lg font-medium text-gray-900">
            {product.title}
          </h3>

          <form className="mt-4 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="block w-full rounded-sm bg-orange-400 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
            >
              Add to Cart
            </button>

            <button
              type="button"
              className="block w-full rounded-sm bg-sky-400 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
            >
              Buy Now
            </button>
          </form>
        </div>
      </a>
    </div>
  );
};

export default ProductItem;
