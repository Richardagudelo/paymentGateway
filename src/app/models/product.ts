export class Product {

    id: number;
    name: string;
    description: string;
    price: number;
    imageURL: string;

    constructor(id, name, descrption, price, imageURL){
        this.id=id;
        this.name=name;
        this.description=descrption;
        this.price=price;
        this.imageURL=imageURL;
    }

}
