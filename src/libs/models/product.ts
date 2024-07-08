import { Schema, model, models } from "mongoose";
const productSchema = new Schema({
    imgSrc: {
        type: String,
        required: true,
    },
    fileKey: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
})

const Product = models.Product || model("Product", productSchema);
export default Product;