import { Iproduct } from "@/types/core";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProductState {
    products: Iproduct[];
    filteredProducts: Iproduct[];
    searchQuery: string;
    selectedCategory: string;
}

const initialState: ProductState = {
    products: [], // Assuming this will be populated with a list of products
    filteredProducts: [],
    searchQuery: '',
    selectedCategory: ''
};

export const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Iproduct[]>) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        },
        setProduct: (state, action: PayloadAction<Iproduct>) => {
            const index = state.products.findIndex(product => product._id === action.payload._id);
            if (index !== -1) {
                state.products[index] = action.payload;
            } else {
                state.products.push(action.payload);
            }
            state.filteredProducts = state.products;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
            state.filteredProducts = state.products.filter(product =>
                product.name.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.selectedCategory = action.payload;
            state.filteredProducts = state.products.filter(product =>
                product.category.toLowerCase() === action.payload.toLowerCase()
            );
        },
        resetFilters: (state) => {
            state.filteredProducts = state.products;
            state.searchQuery = '';
            state.selectedCategory = '';
        }
    }
});

export const { setProducts, setProduct, setSearchQuery, setCategory, resetFilters } = productsSlice.actions;
export default productsSlice.reducer;
