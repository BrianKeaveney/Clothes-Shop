import { Component, OnInit, Input } from '@angular/core';
import { IClothes } from '../iclothes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() clothesData;
  itemImageWidth:number = 300;
  
  constructor() { }

  ngOnInit() {
  }

}
