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
exports.getSingleOrderById = exports.getAllOrders = exports.createOrder = void 0;
const order_model_1 = require("./order.model");
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(data.productId);
    const orderData = new order_model_1.OrderModel(data);
    // orderData.isUserExits
    if (yield orderData.isUserExits(data.productId)) {
        throw new Error("This Product is already exists");
    }
    // const result=await OrderModel.aggregate([
    //   {
    //     $lookup: {
    //       from: "products",
    //       localField: "productId",
    //       foreignField: "_id",
    //       as: "information"
    //     }
    //   },
    // ])
    const result = yield order_model_1.OrderModel.create(data);
    return result;
});
exports.createOrder = createOrder;
const getAllOrders = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find({ email: email });
    return result;
});
exports.getAllOrders = getAllOrders;
// export const getAllOrders = async (email: string) => {
//   const result = await OrderModel.aggregate([
//     { $match: { $eq: email } },
//     {
//       $lookup: {
//         from: "products",
//         localField: "productId",
//         foreignField: "_id",
//         as: "info",
//       },
//     },
//   ]);
//   return result;
// };
const getSingleOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find({ _id: id });
    return result;
});
exports.getSingleOrderById = getSingleOrderById;
