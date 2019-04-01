import { Clothes } from './../clothes';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClothesApiService } from './../clothes-api.service';

@Component({
  selector: 'app-add-clothes',
  templateUrl: './add-clothes.component.html',
  styleUrls: ['./add-clothes.component.css']
})
export class AddClothesComponent implements OnInit {
  @Output() addItemEE: EventEmitter<any> = new EventEmitter();
  show: boolean = false;

  constructor(private _clothesApiService: ClothesApiService) { }

  addItem(itemType:string, imageURL:string):boolean {
    let tempItem = new Clothes(itemType,imageURL);
    this.addItemEE.emit(tempItem);
    this._clothesApiService.addItem({item: {itemType, imageURL}}).subscribe(res => console.log(res));
    return false;
  }

  ngOnInit() {
  }

}
