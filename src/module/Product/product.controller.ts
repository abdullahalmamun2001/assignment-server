import { Request, Response } from "express";
import {
  createOrder,
  createProduct,
  deleteSingleProduct,
  getAllOrders,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
} from "./product.service";
import { TProduct } from "./product.interface";

export const createProductController = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await createProduct(product);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllProductController = async (req: Request, res: Response) => {
  try {
    const result = await getAllProduct();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      da:result.length,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSingleProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { productId } = req.params;
    const result = await getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
     
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const deleteSingleProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const result = await deleteSingleProduct(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result || null,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateSingleProductController = async (
  req: Request,
  res: Response
) => {
  try {
    type Name = {
      name: string;
    };
    const product = req.body;
    const id: string = product.id;
    const options = { upsert: true };
    const updateDoc: TProduct = {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      tags: product.tag,
      variants: product.variants,
      inventory: product.inventory,
    };
    // const result = await updateSingleProduct(updateDoc);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      // data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createOrderController = async (req: Request, res: Response) => {
  try {
    //   const product = req.body;
    //   const result = await createProduct(product);
    //   res.status(200).json({
    //     success: true,
    //     message: "Product created successfully!",
    //     data: result,
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    const orderData = req.body;
    const result = await createOrder(orderData);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllOrdersController=async(req:Request,res:Response)=>{
  try{
    const result=await getAllOrders();
    res.status(200).json({
      success:true,
      message:"",
      data:result,
    })
  }catch(err){
    console.log(err);
  }
}
