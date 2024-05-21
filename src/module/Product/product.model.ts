import mongoose, { Schema } from "mongoose";
import { TOrder, TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
    name: String,
    description: String,
    price: Number,
    category: String,
    tags: Array<string>,
    variants: Array<{ type: String; value: String }>,
    inventory: { quantity: Number, inStock: Boolean },
  },
  { versionKey: false }
);
const OrderSchema = new Schema<TOrder>(
  {
    email: String,
    productId: String,
    price: Number,
    quantity: Number,
  },
  { versionKey: false }
);

export const productModel = mongoose.model("product", productSchema);
export const OrderModel = mongoose.model("order", OrderSchema);
