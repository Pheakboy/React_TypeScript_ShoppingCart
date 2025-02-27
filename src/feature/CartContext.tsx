import { createContext, Dispatch } from "react";
import { CartState, CartAction } from "./CartReducer"; // Import types

// Define context type
interface CartContextType {
  cart: CartState;
  dispatch: Dispatch<CartAction>;
}

// Create context with correct type
export const CartContext = createContext<CartContextType | undefined>(undefined);
