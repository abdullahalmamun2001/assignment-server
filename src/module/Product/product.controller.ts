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
import { ProductValidationWithZod } from "./product.validation";

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
    console.log(err);
  }
};

export const getAllProductController = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;
    console.log(searchTerm);
    const result = await getAllProduct();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      da: result.length,
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
    const id=orderData.productId;
    // if(id=="664ce5f260e4ffad0d58a246"){
    //   console.log(true);
    // }else{
    //   console.log(false);
    // }
    const email=orderData.email;
    const quantity=orderData.quantity;
    console.log(id,email,quantity);
    const result = await createOrder(orderData);
    // const result2=await getAllProduct()

    // const orderIDFromOrder=result.productId;
    // const productCollection=await getAllProduct();
    // productCollection.map(singleProduct=>{
    //   const singleProductID=singleProduct._id;
    //   console.log(singleProductID);

    // }
    // )
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllOrdersController = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    const result = await getAllOrders(email as string);
    if (!email) {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully By email`,
        data: result,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
