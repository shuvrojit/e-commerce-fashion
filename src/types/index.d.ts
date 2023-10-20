import { Types, Document } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  role: string;
}

interface Review {
  name: string;
  rating: number;
  comment: string;
  user: Types.ObjectId;
}

export interface ProductInterface extends Document {
  user: Types.ObjectId;
  title: string;
  description: string;
  image: string;
  colors: string[];
  sizes: string[];
  code: string;
  price: number;
  reviews: Review[];
  brand: string;
  category: string;
  countInStock: number;
}

interface Items {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: Types.ObjectId;
}

interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface PaymentResult {
  id: string;
  status: string;
  updateTime: string;
  email_address: string;
}

export interface OrderInterface extends Document {
  user: Types.ObjectId;
  orderedItems: Items[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentResult: PaymentResult;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: Date;
  isDelivered: boolean;
  deliveredAt: Date;
}

export {};
