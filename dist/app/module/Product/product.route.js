"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
exports.router = (0, express_1.Router)();
// post api router 
exports.router.post('/', product_controller_1.createProductController);
// get route
exports.router.get('/', product_controller_1.getAllProductController);
exports.router.get('/:productId', product_controller_1.getSingleProductController);
// delete route 
exports.router.delete("/:prodID", product_controller_1.deleteSingleProductController);
// update route 
exports.router.put('/:id', product_controller_1.updateSingleProductController);
