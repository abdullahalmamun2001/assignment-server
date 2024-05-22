import { Router } from "express";
import { createOrderController, createProductController, deleteSingleProductController, getAllOrdersController, getAllProductController,getSingleOrderByIdController,getSingleProductController, updateSingleProductController } from "./product.controller";




export const router=Router();
// post api router 

router.post('/orders',createOrderController);
router.post('/products/',createProductController);

// get route
router.get('/products',getAllProductController);
router.get('products/:productId',getSingleProductController);
router.get("/orders",getAllOrdersController);
router.get("/orders/:id",getSingleOrderByIdController);

// delete route 
router.delete("products/:prodID",deleteSingleProductController);

// update route 
router.put('/products/:id',updateSingleProductController)