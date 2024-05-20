import { Request, Response } from "express";
import {
  createProduct,
  getAllProduct,
  getSingleProduct,
} from "./product.service";

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
