import { TProduct } from "./product.interface";
import { productModel } from "./product.model";


export const createProduct = async (data:TProduct) => {
  const result = await productModel.create(data);
  return result;
};
export const getAllProduct=async()=>{
    const result=await productModel.find();
    return result;
};

export const getSingleProduct=async(id:string)=>{
    const result=await productModel.findOne({_id:new Object(id)});
    return result;
}
