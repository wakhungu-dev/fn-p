import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Iproduct {
    id: string;
    title: string;
    image: string;
    price: number;
    quantity: number;
}

const initialState: Array<Iproduct> = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Iproduct>) => {
            const existingProductIndex = state.findIndex((pro) => pro.id === action.payload.id);
            if (existingProductIndex === -1) {
                state.push(action.payload);
            } else {
                state[existingProductIndex].quantity += 1;
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
