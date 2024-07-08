import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import loadingReducer from './features/loadingSlice';
import productReducer from './features/productSlice';  // Ensure the default export

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        loading: loadingReducer,
        product: productReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
