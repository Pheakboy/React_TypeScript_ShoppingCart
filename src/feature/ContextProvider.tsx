import { createContext, useReducer, ReactNode, Dispatch } from "react";
import CartReducer from "./CartReducer";

// Define types for cart items
export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

// Define state type
export type CartState = CartItem[];

// Define action types
export type CartAction =
  | { type: "ADD"; product: CartItem }
  | { type: "REMOVE"; id: number }
  | { type: "INCREASE"; id: number }
  | { type: "DECREASE"; id: number };

// Define context type
interface CartContextType {
  cart: CartState;
  dispatch: Dispatch<CartAction>;
}

// Create context with type
export const CartContext = createContext<CartContextType | undefined>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
