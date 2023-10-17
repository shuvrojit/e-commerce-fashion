import { Router } from "express";
import { createProduct } from "../controllers/product";

const productRouter = Router();
productRouter.post("/", createProduct);

export default productRouter;
