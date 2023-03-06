import { createSlice } from '@reduxjs/toolkit';


  const values = typeof window !== 'undefined' && sessionStorage.getItem("state")
  ? JSON.parse(sessionStorage.getItem("state")).cart
  : []
const a=()=>{
  if(typeof window !== "undefined"){
    if(sessionStorage.getItem("state")){
      return JSON.parse(sessionStorage.getItem("state")).cart
    }
  }
  else{
    return []
  }
}
const data = typeof window !== 'undefined' ? values:""
const cartSlice = createSlice({
  name: 'cart',
  initialState:typeof window !== 'undefined' ? a():[],
  reducers: {
    addToCart: (state, action) => {
      const dataExists = state.find((data) => data.id === action.payload.id);
      if (dataExists) {
        dataExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }

    },
    incrementQuantity: (state, action) => {
      const data = state.find((data) => data.id === action.payload);
      data.quantity++;
    },
    decrementQuantity: (state, action) => {
      const data = state.find((data) => data.id === action.payload);
      if (data.quantity === 1) {
        const index = state.findIndex((data) => data.id === action.payload);
        state.splice(index, 1);
      } else {
        data.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((data) => data.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
