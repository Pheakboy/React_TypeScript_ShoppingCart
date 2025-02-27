import {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
} from "react";
import CartReducer from "./CartReducer";
import { ProductType } from "../types/ProductType";

// Define cart item type
export type CartItem = Omit<
  ProductType,
  "total" | "discountPercentage" | "discountedTotal"
>;

export type CartState = CartItem[];

export type CartAction =
  | { type: "ADD"; product: CartItem }
  | { type: "REMOVE"; id: number }
  | { type: "INCREASE"; id: number }
  | { type: "DECREASE"; id: number };

interface CartContextType {
  cart: CartState;
  dispatch: Dispatch<CartAction>;
}

// Create context with undefined as default
const CartContext = createContext<CartContextType | undefined>(undefined);

// ✅ Safe custom hook to prevent undefined context errors
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Provider component
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
