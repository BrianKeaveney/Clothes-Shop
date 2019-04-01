import { ClothesApiService } from './../clothes-api.service';
import { Component, OnInit } from '@angular/core';
import { IClothes } from '../iclothes';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css'],
  providers: [ClothesApiService]
})
export class ClothesListComponent implements OnInit {
  clothesData;
  constructor(private _clothesAPIService: ClothesApiService) { }

  ngOnInit() {
    this._clothesAPIService.getClothesData().subscribe(clothesData =>
      { this.clothesData = clothesData.Items});
  }

  addItem(evt){
    this.clothesData.push(evt);
  }
}
