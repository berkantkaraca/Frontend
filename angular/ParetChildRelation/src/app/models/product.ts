//Parent component'in child component'i çağırırken ona bu tip array'inde bir veri göndereceğini belirtmiş olduk.

export class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}