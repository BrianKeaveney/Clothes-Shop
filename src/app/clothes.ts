import { IClothes } from './iclothes';

export class Clothes implements IClothes {
    itemType:string;
    imageURL:string;

    constructor(itemType:string, imageURL:string){
        this.itemType = itemType;
        this.imageURL = imageURL;
    }
}