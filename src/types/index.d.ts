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

export interface ProductInterface extends Document {
  user: Types.ObjectId;
  title: string;
  description: string;
  image: string;
  colors: string[];
  sizes: string[];
  code: string;
  price: number;
}

export {};
