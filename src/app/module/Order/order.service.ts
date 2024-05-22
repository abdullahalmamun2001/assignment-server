import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

export const createOrder = async (data: TOrder) => {
    // console.log(data.productId);
  
    const orderData=new OrderModel(data);
    // orderData.isUserExits
    if(await orderData.isUserExits(data.productId)){
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
    const result = await OrderModel.create(data);
    return result;
  };
  
  export const getAllOrders = async (email: string) => {
    const result = await OrderModel.find({ email: email });
    return result;
  };
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
  
  export const getSingleOrderById = async (id: string) => {
    const result = await OrderModel.find({ _id: id });
    return result;
  };