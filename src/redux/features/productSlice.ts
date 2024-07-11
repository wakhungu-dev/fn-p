import { Iproduct } from "@/types/core";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: Iproduct = {
    _id:  '',
    imgSrc:  '',
    fileKey:  '',
    name:  '',
    price: {amount: 0, currency: 'ksh'},
    category:  '',
    quantity:  1,
}
 export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers : {
        setProduct: (state, action: PayloadAction<Iproduct>) => {
            return action.payload
        }
    }
 })
 export const {setProduct} = productSlice.actions;
 export default productSlice.reducer;
 