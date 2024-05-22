"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSingleProductController = exports.deleteSingleProductController = exports.getSingleProductController = exports.getAllProductController = exports.createProductController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
const product_model_1 = require("./product.model");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const zodParsedData = product_validation_1.ProductValidationWithZod.parse(product);
        const result = yield (0, product_service_1.createProduct)(zodParsedData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Sorry Product unsuccessFully",
            error: err,
        });
    }
});
exports.createProductController = createProductController;
const getAllProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm || "";
        const query = searchTerm
            ? { name: { $regex: searchTerm, $options: "i" } }
            : {};
        const allProduct = yield product_model_1.productModel.find(query);
        res.status(200).json({
            success: true,
            message: "fetch successfully",
            length: allProduct.length,
            data: allProduct,
        });
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
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: err,
        });
    }
});
exports.getAllProductController = getAllProductController;
const getSingleProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield (0, product_service_1.getSingleProduct)(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: err,
        });
    }
});
exports.getSingleProductController = getSingleProductController;
const deleteSingleProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield (0, product_service_1.deleteSingleProduct)(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result || null,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: err,
        });
    }
});
exports.deleteSingleProductController = deleteSingleProductController;
const updateSingleProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield (0, product_service_1.updateSingleProduct)(query, updateDoc, options);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: err,
        });
    }
});
exports.updateSingleProductController = updateSingleProductController;
// export const createOrderController = async (req: Request, res: Response) => {
//   try {
//     const orderData = req.body;
//     const zodParsedData=OrderValidationWithZod.parse(orderData);
//     const result = await createOrder(zodParsedData);
//     res.status(200).json({
//       success: true,
//       message: "Orders fetched successfully!",
//       data: result,
//     });
//   } catch (err:any) {
//     res.status(500).json({
//       success: false,
//       message: "Order already exits",
//       error:err
//     })
//   }
// };
// export const getAllOrdersController = async (req: Request, res: Response) => {
//   try {
//     const lookupFromProduct=await OrderModel.aggregate([
//       {
//         $lookup:{
//           from:"products",
//           localField:"productId",
//           foreignField:"_id",
//           as:"info",
//         }
//       }
//     ])
//     res.status(200).json({
//       massage:"done",
//       data:lookupFromProduct
//     })
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Something Went Wrong",
//       error:err
//     })
//   }
// };
// export const getSingleOrderByIdController=async(req:Request,res:Response)=>{
//   try{
//     const id=req.params.id
//     console.log(id);
//     const result=await getSingleOrderById(id);
//     res.status(200).json({success:"not id found",d:result})
//     // res
//   }catch(err){
//     res.status(500).json({
//       success: false,
//       message: "Something Went Wrong",
//       error:err
//     })
//   }
// }
