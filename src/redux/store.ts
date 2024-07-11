import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './features/loadingSlice';
import productReducer from './features/productSlice';  // Ensure the default export
import cartSlice from './features/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        loading: loadingReducer,
        product: productReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});


// src/redux/store.ts




// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
