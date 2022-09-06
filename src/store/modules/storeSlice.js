import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  productsList: [],
  userCart: [],
  totalCartItems: 0,
  totalCartPrice: 0,
};

export const storeSlice = createSlice({
  name: "fakeStore",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productsList = action.payload.data;
    },
    addToCart: (state, action) => {
      const targetProduct = action.payload.data;
      const productIndex = state.userCart.findIndex(function (i) {
        return i.id === targetProduct.id;
      });
      if (
        state.userCart.some(function (i) {
          return i.id === targetProduct.id;
        })
      ) {
        state.userCart[productIndex].amount += 1;
      } else state.userCart.push({...targetProduct, amount: 1});
      state.totalCartItems++;
      state.totalCartPrice += targetProduct.price
    },
    removeFromCart: (state, action) => {
      const targetProduct = action.payload.data;
      const productIndex = state.userCart.findIndex(function (i) {
        return i.id === targetProduct.id;
      });
      const itemAmount = state.userCart[productIndex].amount
      state.totalCartItems -= itemAmount
      state.totalCartPrice -= itemAmount * targetProduct.price
      state.userCart = state.userCart.filter(function (i) {
        return i.id !== targetProduct.id;
      });
    },
    cartDecrement: (state, action) => {
      const targetProduct = action.payload.data;
      const productIndex = state.userCart.findIndex(function (i) {
        return i.id === targetProduct.id;
      });
      if (state.userCart[productIndex].amount === 1) {
        state.userCart = state.userCart.filter(function (i) {
          return i.id !== targetProduct.id;
        });
      } else state.userCart[productIndex].amount -= 1;
      state.totalCartItems--
      state.totalCartPrice -= targetProduct.price
    },
    cartIncrement: (state, action) => {
      const targetProduct = action.payload.data;
      const productIndex = state.userCart.findIndex(function (i) {
        return i.id === targetProduct.id;
      });
      state.userCart[productIndex].amount += 1;
      state.totalCartItems++;
      state.totalCartPrice += targetProduct.price
    },
    emptyCart: (state) => {
      state.userCart = []
      state.totalCartPrice = 0
      state.totalCartItems = 0
    }
  },
});

export const selectProduct = (state, id) =>
  state.fakeStore.productsList.filter((i) => {
    return i.id === id;
  });

export const selectCartItems = (state) => state.fakeStore.userCart;
export const selectTotalCartItems = (state) => state.fakeStore.totalCartItems;
export const selectTotalCartPrice = (state) => state.fakeStore.totalCartPrice;

export const storeAction = storeSlice.actions;
export const { setProducts, addToCart, removeFromCart, cartDecrement, cartIncrement, emptyCart} = storeSlice.actions;

export default storeSlice;
