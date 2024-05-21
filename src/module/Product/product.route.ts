import { Router } from "express";
import { createOrderController, createProductController, deleteSingleProductController, getAllOrdersController, getAllProductController, getSingleOrderByEmailController, getSingleProductController, updateSingleProductController } from "./product.controller";
import { updateSingleProduct } from "./product.service";
import { emit } from "process";


export const router=Router();
// post api router 

router.post('/order',createOrderController);
router.post('/product/',createProductController);

// get route
router.get('/product?name',getAllProductController);
router.get("/order",getAllOrdersController);
router.get("/order/:email",getSingleOrderByEmailController)
router.get('product/:productId',getSingleProductController);

// delete route 
router.delete("product/:prodID",deleteSingleProductController);

// update route 
router.put('/product/:id',updateSingleProductController)