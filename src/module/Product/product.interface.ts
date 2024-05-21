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

export interface TOrder{
  email:string,
  productId:string,
  price:number,
  quantity:number,
}
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

export type TFilter={
_id: Object;
}
export type TOption={
upsert:boolean;
}
