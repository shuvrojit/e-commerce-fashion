import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from "../controllers/product";

const productRouter = Router();
productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
productRouter.get("/:id", getOneProduct);
productRouter.post("/:id", updateProduct);

export default productRouter;
