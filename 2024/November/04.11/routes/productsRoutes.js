import express from "express"
import { getAllProducts, getProductsByID, createNewProduct, updateAllProduct, deleteProduct } from "../controllers/productsControllers.js"

const router = express.Router()

// Products Routes
router.get('/', getAllProducts);

router.get("/:id", getProductsByID);

router.post("/", createNewProduct);

router.put("/:id", updateAllProduct);

router.delete("/:id", deleteProduct);

export default router