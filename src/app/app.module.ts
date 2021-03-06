import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ItemComponent } from './item/item.component';
import { AddClothesComponent } from './add-clothes/add-clothes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    ItemComponent,
    AddClothesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
