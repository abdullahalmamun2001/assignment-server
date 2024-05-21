import { Router } from "express";
import { createOrderController, createProductController, deleteSingleProductController, getAllOrdersController, getAllProductController, getSingleProductController } from "./product.controller";
import { updateSingleProduct } from "./product.service";


export const router=Router();
// post api router 

router.post('/order',createOrderController);
router.post('/product',createProductController);

// get route for all product
router.get('/product',getAllProductController);
// router for get all order 
router.get("/order",getAllOrdersController)
// get route for single product 
router.get('product/:productId',getSingleProductController);

// delete route 
router.delete("product/:prodID",deleteSingleProductController);

// update route 
// router.put('/:id',updateSingleProduct)