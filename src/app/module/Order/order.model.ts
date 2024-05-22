import mongoose, { Schema } from "mongoose";
import { TOrder, TOrderModel, orderMethods } from "./order.interface";

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
  
  
 
  export const OrderModel = mongoose.model<TOrder,TOrderModel>("order", OrderSchema);