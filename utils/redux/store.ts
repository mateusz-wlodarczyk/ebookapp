import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type cartState = { id: string; name: string; quantity: number }[];
// { id: "", name: "", quantity: 0 }
const initialState: cartState = [
  { id: "regvseg", name: "fadfasdf", quantity: 23 },
  { id: "cdd", name: "fdasf", quantity: 12 },
  { id: "bjds", name: "fadfasdf", quantity: 6 },
  { id: "bjdtys", name: "bjdtyb", quantity: 1 },
  { id: "bjt", name: "iukbmj", quantity: 5 },
];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...state,
          { id: action.payload.id, name: action.payload.name, quantity: 1 },
        ];
      }
    },
    increaseQuantity: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decreaseQuantity: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
    deleteItemFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    }, 
   
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItemFromCart,
} = cartSlice.actions;

const store = configureStore({
  reducer: { cartSlice: cartSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
