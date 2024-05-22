import mongoose, { Schema } from "mongoose";
import { TOrder, TOrderModel, TProduct, orderMethods } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
    name: String,
    description: String,
    price: Number,
    category: String,
    tags: Array<string>,
    variants: Array<{ type: String; value: String }>,
    inventory: { quantity: Number, inStock: Boolean },
  },
  { versionKey: false }
);
const OrderSchema = new Schema<TOrder,TOrderModel,orderMethods>(
  {
    email: String,
    productId: String,
    price: Number,
    quantity: Number,
  },
  { versionKey: false }
);

OrderSchema.methods.isUserExits=async function(id:string){
  const isExistingOrder=await OrderModel.findOne({productId:id})
  return isExistingOrder;
}


export const productModel = mongoose.model<TProduct>("product", productSchema);
export const OrderModel = mongoose.model<TOrder,TOrderModel>("order", OrderSchema);
