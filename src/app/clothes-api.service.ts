import { IClothes } from './iclothes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Clothes } from './clothes';


@Injectable({
  providedIn: 'root'
})
export class ClothesApiService {

  private _siteURL = 'http://localhost:3000/clothes_data';
  private _getSiteURL = 'https://qtxdl5l8gg.execute-api.eu-west-1.amazonaws.com/prod/cart';
  private _postSiteURL = 'https://qtxdl5l8gg.execute-api.eu-west-1.amazonaws.com/prod/cart';

  constructor(private _http: HttpClient) { }

  addItem (newItem): Observable<Clothes> {
    console.log("works");
    return this._http.post<Clothes>(this._postSiteURL, newItem)
    .pipe(
      catchError(this.handleError)
    );
  }

  getClothesData(): Observable<IClothes[]> {
    return this._http.get<IClothes[]>(this._siteURL).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log("ClothesApiService: " + err.message);
    return Observable.throw(err.message);
  }
}
