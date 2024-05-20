type TAlternative=[{
    type:string,
    value:string,
},
{
    type:string,
    value:string,
}];

type TInventory={
    quantity:number,
    inStock:boolean,
}

type TProduct={
    name:string,
    description:string,
    price:number,
    category:string,
    tags:Array<string>,
    variants:TAlternative,
    inventory:TInventory,
}