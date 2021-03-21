import { Product } from "./product";

export class CartItemModel {
    productId: number;
    productName: string;
    productPrice:number;
    qty: number;

    constructor(prodct: Product){
        this.productId = prodct.id;
        this.productName = prodct.name;
        this.productPrice = prodct.price;
        this.qty=1;
    }
}
