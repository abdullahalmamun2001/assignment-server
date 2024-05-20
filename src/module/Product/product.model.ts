import mongoose, { Schema, model,  } from "mongoose";

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: Array<string>,
  variants: [
    {
      type: String,
      value: String,
    },
    {
      type: String,
      value: String,
    },
  ],
  inventory: {
    quantity: Number,
    inStock: Boolean,
  },
});
export const productModel=model('product',productSchema);
