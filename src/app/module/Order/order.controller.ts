import { Request, Response } from "express";
import { OrderModel } from "./order.model";
import { createOrder, getSingleOrderById } from "./order.service";
import { OrderValidationWithZod } from "./order.validation";
import { productModel } from "../Product/product.model";
// import { productModel } from "../Product/product.model";

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParsedData = OrderValidationWithZod.parse(orderData);
    const result = await createOrder(zodParsedData);
    res.status(200).json({
      success: true,
      message: "successfully",
      data: result,
    });

    // res.status(200).json({
    //   success: true,
    //   message: "Orders fetched successfully!",
    //   data: result,
    // });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order already exits",
      error: err,
    });
  }
};

export const getAllOrdersController = async (req: Request, res: Response) => {
  try {
    const lookupFromProduct = await OrderModel.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "info",
        },
      },
    ]);
    res.status(200).json({
      massage: "done",
      data: lookupFromProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
      error: err,
    });
  }
};

export const getSingleOrderByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id;
    const result = await getSingleOrderById(id);
    res.status(200).json({ success: "not id found", d: result });
    // res
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong",
      error: err,
    });
  }
};
