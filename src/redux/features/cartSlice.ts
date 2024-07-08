import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Iproduct {
    id: string;
    title: string;
    image: string;
    price: number;
    quantity: number;
}

const initialState: Array<Iproduct> = [];

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Iproduct>) => {
            state.push(action.payload);
        },
        updateProduct: (state, action: PayloadAction<Iproduct>) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            return state.filter(product => product.id !== action.payload);
        },
    },
});

export const { addProduct, updateProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
