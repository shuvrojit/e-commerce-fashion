import asyncHandler from "../middleware/async-handler";
import { Request, Response } from "express";
import Product from "../models/product";

export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await Product.create({
      user: req.user!.id,
      title: req.body.title,
      code: req.body.code,
      description: req.body.description,
      price: req.body.price,
      colors: req.body.colors,
      sizes: req.body.sizes,
    });

    res.status(201);
    res.json({ message: "New product created." });
  }
);

export const getAllProducts = asyncHandler(
  async (req: Request, res: Response) => {
    const products = await Product.find();
    if (!products) {
      res.status(200);
      res.json({ message: "No product found" });
    }

    res.status(201);
    res.json({ products });
  }
);
