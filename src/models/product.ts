import mongoose from "mongoose";
import { ProductInterface } from "../types";

const colorSchema = new mongoose.Schema({
  color: String,
});

const sizeSchema = new mongoose.Schema({
  size: String,
});

const reviewSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    required: true,
  },
  comment: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const productSchema = new mongoose.Schema<ProductInterface>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },

    code: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    colors: [colorSchema],
    sizes: [sizeSchema],
    countInStock: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<ProductInterface>("Product", productSchema);

export default Product;
