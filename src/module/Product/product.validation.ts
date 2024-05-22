import { TVariants, TInventory, TProduct } from "./product.interface";
import { z } from "zod";

export const ProductValidationWithZod = z.object({
  name: z.string({ required_error: "Name is must be string" }).max(20),
  description: z.string(),
  price: z.number({ required_error: "Price is required" }),
  category: z.string(),
  tags: z.string().array(),
  variants: z
    .object({
      type: z.string(),
      value: z.string(),
    })
    .array(),
  inventory: z.object({
    quantity: z.number(),
    inStock: z.boolean(),
  }),
});

export const OrderValidationWithZod=z.object({
        email:z.string(),
        productId:z.string(),
        price:z.number(),
        quantity:z.number(),
})