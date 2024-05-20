import { Request, Response } from "express";
import { createProduct, getAllProduct } from "./product.service";

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

export const getAllProductController=async (req:Request,res:Response)=>{
    try{
        const result=await getAllProduct();
        res.status(200).json({
            success:true,
            message:"Products fetched successfully!",
            m:result.length,
            data:result,
        })
    }catch(err){
        console.log(err);
    }
};


