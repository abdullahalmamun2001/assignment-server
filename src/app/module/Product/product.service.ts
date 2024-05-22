import { TProduct } from "./product.interface";
import { productModel } from "./product.model";


 interface TFilter  {
  _id: Object;
};
interface TOption  {
  upsert: boolean;
};
export const createProduct = async (data: TProduct) => {
  const result = await productModel.create(data);
  return result;
};

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

