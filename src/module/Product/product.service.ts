import { TOrder, TProduct } from "./product.interface";
import { OrderModel, productModel } from "./product.model";

export const createProduct = async (data: TProduct) => {
  const result = await productModel.create(data);
  return result;
};
export const getAllProduct = async () => {
  const result = await productModel.find({name:{$regex:"iphone"}});
  return result;
};
// export const getAllProduct = async () => {
//   const result = await productModel.find({name:{$regex:"iphone"}});
//   return result;
// };
// // export const getAllProductBySearch = async () => {
// //   const result = await productModel.createIndexes({$text: { $search: "dolor" }});
// //   return result;
// // };

export const getSingleProduct = async (id: string) => {
  const result = await productModel.findOne({ _id: new Object(id) });
  return result;
};

export const deleteSingleProduct = async (id: string) => {
  const result = await productModel.deleteOne({ _id: new Object(id) });
  return result;
};
export const updateSingleProduct = async (id:string) => {
  const ProductId = { _id: new Object(id) };
  const option = { upsert: true };
  const result = await productModel.updateOne(ProductId,option);
  return result;
};

export const createOrder = async (data:TOrder) => {
  const result = await OrderModel.create(data);
  return result;
};

export const getAllOrders=async()=>{
  const result=await OrderModel.find();
  return result;
}


