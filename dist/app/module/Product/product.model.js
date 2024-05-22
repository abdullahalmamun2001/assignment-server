"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// import { TOrder, TOrderModel, TProduct, orderMethods } from "./product.interface";
const productSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    tags: (Array),
    variants: (Array),
    inventory: { quantity: Number, inStock: Boolean },
}, { versionKey: false });
// const OrderSchema = new Schema<TOrder,TOrderModel,orderMethods>(
//   {
//     email: String,
//     productId: String,
//     price: Number,
//     quantity: Number,
//   },
//   { versionKey: false }
// );
// OrderSchema.methods.isUserExits=async function(id:string){
//   const isExistingOrder=await OrderModel.findOne({productId:id})
//   return isExistingOrder;
// }
exports.productModel = mongoose_1.default.model("product", productSchema);
// export const OrderModel = mongoose.model<TOrder,TOrderModel>("order", OrderSchema);
