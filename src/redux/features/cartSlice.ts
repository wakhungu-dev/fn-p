import { Iproduct } from '@/types/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: Array<Iproduct> = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Iproduct>) => {
            const existingProductIndex = state.findIndex((pro) => pro._id === action.payload._id);
            if (existingProductIndex === -1) {
                state.push(action.payload);
            } else {
                state[existingProductIndex].quantity += 1;
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const _id = action.payload;
            return state.filter((item) => item._id !== _id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
