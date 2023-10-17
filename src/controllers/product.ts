import asyncHandler from "../middleware/async-handler";
import { Request, Response } from "express";
import Product from "../models/product";

export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    console.log(req.user!);
    // const product = await Product.create({
    //   user: req.user!.id,
    //   title: req.body.title,
    //   code: req.body.code,
    //   description: req.body.description,
    //   price: req.body.price,
    // });

    res.status(201);
    res.json({ message: "New product created." });
  }
);
