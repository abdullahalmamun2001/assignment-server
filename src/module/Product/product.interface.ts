import { Model } from "mongoose";

export type TVariants = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants[];
  inventory: TInventory;
};

export interface TOrder {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

export type orderMethods = {
  isUserExits(id: string): Promise<TOrder | null>;
};
export type TOrderModel = Model<TOrder, Record<string, never>, orderMethods>;
// interface Variant {
//     type: string;
//     value: string;
//   }

//   interface Inventory {
//     quantity: number;
//     inStock: boolean;
//   }

//   interface Product {
//     name: string;
//     description: string;
//     price: number;
//     category: string;
//     tags: string[];
//     variants: Variant[];
//     inventory: Inventory;
//   }

export type TFilter = {
  _id: Object;
};
export type TOption = {
  upsert: boolean;
};
