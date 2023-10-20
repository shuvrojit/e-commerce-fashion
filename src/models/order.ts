import mongoose from "mongoose";
import { OrderInterface } from "../types";

const OrderSchema = new mongoose.Schema<OrderInterface>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderedItems: {
      name: {
        type: String,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    },
    shippingAddress: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    itemsPrice: {
      type: Number,
      requried: true,
    },
    taxPrice: {
      type: Number,
      required: true,
    },
    shippingPrice: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
    },
    paidAt: {
      type: Date,
      required: true,
    },
    isDelivered: {
      type: Boolean,
      required: true,
    },
    deliveredAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model<OrderInterface>("Order", OrderSchema);

export default Order;
