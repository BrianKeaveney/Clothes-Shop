import { IClothes } from './iclothes';

export class Clothes implements IClothes {
    itemType:string;
    imageURL:string;
    price:number;

    constructor(itemType:string, imageURL:string, price:number){
        this.itemType = itemType;
        this.imageURL = imageURL;
        this.price = price;
    }
}