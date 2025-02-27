export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

export type CartState = CartItem[];

export type CartAction =
  | { type: "ADD"; product: CartItem }
  | { type: "REMOVE"; id: number }
  | { type: "INCREASE"; id: number }
  | { type: "DECREASE"; id: number };

const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD": {
      const existingItem = state.find((item) => item.id === action.product.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { ...action.product, quantity: 1 }];
      }
    }

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    case "INCREASE":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case "DECREASE":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
};

export default CartReducer;
