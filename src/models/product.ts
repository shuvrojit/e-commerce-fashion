import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  color: String,
});

const sizeSchema = new mongoose.Schema({
  size: String,
});

const productSchema = new mongoose.Schema(
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

const Product = mongoose.model("Product", productSchema);

export default Product;
