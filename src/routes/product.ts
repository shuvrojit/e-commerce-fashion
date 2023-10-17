import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product";

const productRouter = Router();
productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
productRouter.get("/:id", getOneProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
