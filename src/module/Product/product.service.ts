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
export const getAllProduct = async () => {
  const result = await productModel.find();
  
  return result;
};
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

// export const getAllOrders = async (email: string) => {
//   const result = await OrderModel.find({ email: email });
//   return result;
// };
export const getAllOrders = async (email: string) => {
  const result = await OrderModel.find({ email: { $eq: email } });
  return result;
};
