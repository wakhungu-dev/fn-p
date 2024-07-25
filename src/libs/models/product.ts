import { Category, Iproduct, Rating, Review } from "@/types/core";
import { Schema, model, models } from "mongoose";
// Define the Review schema
const reviewSchema: Schema<Review> = new Schema({
  rating: {
    type: Number,
    enum: Rating,
    required: true,
    default: Rating.ZERO,
  },
  comment: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const productSchema = new Schema<Iproduct>(
  {
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
      enum: Category,
      default: Category.ALL,

      required: true,
    },
    price: {
      type: { amount: Number, currency: String },
      required: true,
    },

    quantity: {
      type: Number,
      default: 1,
    },

    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", productSchema);
export default Product;
