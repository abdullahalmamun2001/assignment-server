import { Router } from "express";
import { createProductController } from "./product.controller";

export const router=Router();

router.post('/product',createProductController)