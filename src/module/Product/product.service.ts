import { TFilter, TOption, TOrder, TProduct } from "./product.interface";
import { OrderModel, productModel } from "./product.model";

export const createProduct = async (data: TProduct) => {
  const result = await productModel.create(data);
  return result;
};
// export const getAllProduct = async (name:string) => {
//   const result = await productModel.aggregate({ name: { $regex: name, $options: /i/ } });
//   return result;
// };
// export const getAllProduct = async (searchTerm: string) => {
//   const result=await productModel.find(searchTerm);
// if(searchTerm){
//   const result = await productModel.find({
//     $or:{
//       name:{$regex:searchTerm}
//     }
//     // name: { $regex: searchTerm  },

//   });
//   return result;
// }else{
//   const result=await productModel.find();
//   return result;
// }

// return result;
// };
// export const getAllProductBySearch = async () => {
//   const result = await productModel.createIndexes({$text: { $search: "dolor" }});
//   return result;
// };

export const getSingleProduct = async (id: string) => {
  const result = await productModel.findOne({ _id: new Object(id) });
  return result;
};

export const deleteSingleProduct = async (id: string) => {
  const result = await productModel.deleteOne({ _id: new Object(id) });
  return result;
};
export const updateSingleProduct = async (
  filter: TFilter,
  updateData: TProduct,
  options: TOption
) => {
  const result = await productModel.updateOne(filter, updateData, options);
  return result;
};

export const createOrder = async (data: TOrder) => {
  console.log(data.productId);

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
