import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post('/', ProductControllers.createNewProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:productId', ProductControllers.getAProductById);

router.put('/:productId', ProductControllers.updateAProduct);

router.delete('/:productId', ProductControllers.deleteAProductById);

export const ProductRoutes = router;

