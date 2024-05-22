"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleOrderByIdController = exports.getAllOrdersController = exports.createOrderController = void 0;
const order_model_1 = require("./order.model");
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
// import { productModel } from "../Product/product.model";
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const zodParsedData = order_validation_1.OrderValidationWithZod.parse(orderData);
        const result = yield (0, order_service_1.createOrder)(zodParsedData);
        // const orderProductId = result._id;
        // const orderQuantity = result.quantity;
        //   console.log(orderProductId,orderQuantity);
        //   if(await orderProductId){
        //     console.log(orderProductId);
        //     console.log(allProduct)
        //   }
        // const allProduct = await productModel.find();
        // for (const singleProduct of allProduct) {
        //   const orderAll=await OrderModel.findOne({productId:singleProduct._id})
        //   const orderAll = await OrderModel.aggregate([
        //     { $match: { productId: singleProduct._id } },
        //   ]);
        //   console.log(orderAll);
        // }
        //   console.log(query);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Order already exits",
            error: err,
        });
    }
});
exports.createOrderController = createOrderController;
const getAllOrdersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lookupFromProduct = yield order_model_1.OrderModel.aggregate([
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "info",
                },
            },
        ]);
        res.status(200).json({
            massage: "done",
            data: lookupFromProduct,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: err,
        });
    }
});
exports.getAllOrdersController = getAllOrdersController;
const getSingleOrderByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, order_service_1.getSingleOrderById)(id);
        res.status(200).json({ success: "not id found", d: result });
        // res
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: err,
        });
    }
});
exports.getSingleOrderByIdController = getSingleOrderByIdController;
