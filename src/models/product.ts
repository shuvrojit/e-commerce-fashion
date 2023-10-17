import mongoose from "mongoose";
import { ProductInterface } from "../types";

const colorSchema = new mongoose.Schema({
  color: String,
});

const sizeSchema = new mongoose.Schema({
  size: String,
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
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<ProductInterface>("Product", productSchema);

export default Product;
