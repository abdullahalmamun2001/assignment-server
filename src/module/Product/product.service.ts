import { TProduct } from "./product.interface";
import { productModel } from "./product.model";


export const createProduct = async (data:TProduct) => {
  const result = await productModel.create(data);
  return result;
};
