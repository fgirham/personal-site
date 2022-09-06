import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import storeSlice from 'store/modules/storeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    fakeStore: storeSlice.reducer,
  },
});

export default store