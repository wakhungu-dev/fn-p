import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './features/loadingSlice';
import productReducer from './features/productSlice';  // Ensure the default export
import cartSlice from './features/cartSlice';
import productsReducer from './features/productsSlice';

/**
 * The Redux store configuration.
 */
export const store = configureStore({
    reducer: {
        cart: cartSlice,
        loading: loadingReducer,
        product: productReducer,
        products: productsReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

// src/redux/store.ts

/**
 * The root state type inferred from the store itself.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * The type of the dispatch function inferred from the store itself.
 */
export type AppDispatch = typeof store.dispatch;
