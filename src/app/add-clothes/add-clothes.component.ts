import { Clothes } from './../clothes';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-clothes',
  templateUrl: './add-clothes.component.html',
  styleUrls: ['./add-clothes.component.css']
})
export class AddClothesComponent implements OnInit {
  @Output() addItemEE: EventEmitter<any> = new EventEmitter();
  show: boolean = false;
  constructor() { }

  addItem(item:string, imageURL:string):boolean {
    let tempItem = new Clothes(item,imageURL);
    this.addItemEE.emit(tempItem);
    return false;
  }

  ngOnInit() {
  }

}
