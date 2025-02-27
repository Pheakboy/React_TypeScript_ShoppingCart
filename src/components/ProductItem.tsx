import { useCart } from "../feature/ContextProvider";
import { ProductType } from "../types/ProductType";

const ProductItem = ({ product }: { product: ProductType }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      product: {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        thumbnail: product.thumbnail,
      },
    });
  };

  return (
    <div className="p-4 w-full max-w-xs">
      <a href="/" className="group relative block overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <p className="text-gray-700">
            ${product.price}
            {product.discountedTotal && (
              <span className="text-gray-400 line-through ml-2">
                ${product.discountedTotal}
              </span>
            )}
          </p>

          <h3 className="mt-1.5 text-lg font-medium text-gray-900">{product.title}</h3>

          <div className="mt-4 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="block w-full cursor-pointer rounded-sm bg-orange-400 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductItem;
