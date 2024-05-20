import mongoose, { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariants } from "./product.interface";


const productSchema = new Schema<TProduct>({
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: Array<string>,
  variants: Array<{ type: String; value: String }>,
  inventory: { quantity: Number, inStock: Boolean },
});
export const productModel = model("product", productSchema);
