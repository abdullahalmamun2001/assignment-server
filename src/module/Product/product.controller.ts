import { Request, Response } from "express";
import { createProduct } from "./product.service";

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
