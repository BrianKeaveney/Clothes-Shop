import { IClothes } from './iclothes';

export class Clothes implements IClothes {
    item:string;
    imageURL:string;

    constructor(item:string, imageURL:string){
        this.item = item;
        this.imageURL = imageURL;
    }
}