import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getOneProduct,
} from "../controllers/product";

const productRouter = Router();
productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
productRouter.get("/:id", getOneProduct);

export default productRouter;
