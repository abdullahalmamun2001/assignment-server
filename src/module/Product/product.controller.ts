import { Request, Response } from "express";
import {
  createOrder,
  createProduct,
  deleteSingleProduct,
  getAllOrders,
  getSingleOrderById,
  getSingleProduct,
  updateSingleProduct,
} from "./product.service";
import { OrderValidationWithZod, ProductValidationWithZod } from "./product.validation";
import { OrderModel, productModel } from "./product.model";

export const createProductController = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const zodParsedData=ProductValidationWithZod.parse(product)
    const result = await createProduct(zodParsedData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Sorry Product unsuccessFully",
      error:err
    })
  }
};

export const getAllProductController = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm || "";
    console.log(searchTerm);
    const query= searchTerm ? {name:{$regex:searchTerm,$options:"i"}}:{};
    const allProduct=await productModel.find(query)
    res.status(200).json({
      success:true,
      message:"fetch successfully",
      length:allProduct.length,
      data:allProduct,
    })
    // if(searchTerm){
    //   const result = await getAllProduct(searchTerm as string);
    //   res.status(200).json({
    //     success: true,
    //     message: "Products fetched successfully!",
    //     da: result.length,
    //     data: result,
    //   });
    // }else{
      // const result = await getAllProduct();
      // res.status(200).json({
      //   success: true,
      //   message: "Products fetched successfully!",
      //   da: result.length,
      //   data: result,
      // });
    // }
   
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
      error:err
    })
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
    const { id } = req.params;
    const query = { _id: new Object(id) };
    const options = { upsert: true };
    // const updateDoc: TProduct = {
    //   name: product.name,
    //   description: product.description,
    //   price: product.price,
    //   category: product.category,
    //   tags: product.tag,
    //   variants: product.variants,
    //   inventory: product.inventory,
    // };
    const updateDoc = req.body;
    const result = await updateSingleProduct(query, updateDoc, options);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParsedData=OrderValidationWithZod.parse(orderData);
    const email=orderData.email;
    const quantity=orderData.quantity;
    const result = await createOrder(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: "Order already exits",
      error:err
    })
  }
};

export const getAllOrdersController = async (req: Request, res: Response) => {
  try {
    const lookupFromProduct=await OrderModel.aggregate([
      {
        $lookup:{
          from:"products",
          localField:"productId",
          foreignField:"_id",
          as:"info",
        }
      }
    ])
    res.status(200).json({
      massage:"done",
      data:lookupFromProduct
    })



    // const email = req.query.email;
    // const result = await getAllOrders(email as string);
    // if (!email) {
    //   res.status(200).json({
    //     success: true,
    //     message: "Orders fetched successfully!",
    //     data: result,
    //   });
    // } else {
    //   res.status(200).json({
    //     success: true,
    //     message: `Orders fetched successfully By email`,
    //     data: result,
    //   });
    // }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
      error:err
    })
  }
};

export const getSingleOrderByIdController=async(req:Request,res:Response)=>{
  // console.log(req,res);
  try{
    const id=req.params.id
    console.log(id);
    const result=await getSingleOrderById(id);
    res.status(200).json({success:"not id found",d:result})
    // res  
  }catch(err){
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
      error:err
    })
  }
}
