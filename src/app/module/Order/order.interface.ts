import { Model } from "mongoose";

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