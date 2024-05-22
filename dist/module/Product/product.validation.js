"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidationWithZod = void 0;
const zod_1 = require("zod");
exports.ProductValidationWithZod = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Name is must be string" }).max(20),
    description: zod_1.z.string(),
    price: zod_1.z.number({ required_error: "Price is required" }),
    category: zod_1.z.string(),
    tags: zod_1.z.string().array(),
    variants: zod_1.z
        .object({
        type: zod_1.z.string(),
        value: zod_1.z.string(),
    })
        .array(),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number(),
        inStock: zod_1.z.boolean(),
    }),
});
// export const OrderValidationWithZod=z.object({
//         email:z.string(),
//         productId:z.string(),
//         price:z.number(),
//         quantity:z.number(),
// })
