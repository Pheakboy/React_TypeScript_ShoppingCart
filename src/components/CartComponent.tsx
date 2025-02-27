import { useCart } from "../feature/ContextProvider";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

const CartComponent = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div className="mt-8 mx-4">
            {cart.length > 0 ? (
              cart.map((p) => <CartProduct key={p.id} product={p} />)
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>TotalItem</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-end">
                  <Link to = "/cart/checkout"
                   className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartComponent;
