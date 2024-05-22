import { Router } from "express";
import {  createProductController, deleteSingleProductController, getAllProductController,getSingleProductController, updateSingleProductController } from "./product.controller";




export const router=Router();
// post api router 


router.post('/',createProductController);

// get route
router.get('/',getAllProductController);
router.get('/:productId',getSingleProductController);


// delete route 
router.delete("/:prodID",deleteSingleProductController);

// update route 
router.put('/:id',updateSingleProductController)