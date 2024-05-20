import { Router } from "express";
import { createProductController, getAllProductController, getSingleProductController } from "./product.controller";

export const router=Router();

router.post('/product',createProductController);

// get route for all product
router.get('/',getAllProductController);
// get route for single product 
router.get('/:productId',getSingleProductController)