import { Router } from "express";
import { createProductController, getAllProductController } from "./product.controller";

export const router=Router();

router.post('/product',createProductController);

// get route 
router.get('/',getAllProductController)