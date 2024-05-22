import { Request, Response } from "express";
import { OrderModel } from "./order.model";
import { createOrder, getSingleOrderById } from "./order.service";
import { OrderValidationWithZod } from "./order.validation";
// import { productModel } from "../Product/product.model";

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParsedData = OrderValidationWithZod.parse(orderData);
    const result = await createOrder(zodParsedData);
    // const orderProductId = result._id;
    // const orderQuantity = result.quantity;
    //   console.log(orderProductId,orderQuantity);
    //   if(await orderProductId){
    //     console.log(orderProductId);
    //     console.log(allProduct)
    //   }
    // const allProduct = await productModel.find();
    // for (const singleProduct of allProduct) {
      //   const orderAll=await OrderModel.findOne({productId:singleProduct._id})
    //   const orderAll = await OrderModel.aggregate([
    //     { $match: { productId: singleProduct._id } },
    //   ]);
    //   console.log(orderAll);
    // }
    //   console.log(query);

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
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
