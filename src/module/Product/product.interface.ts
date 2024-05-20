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
