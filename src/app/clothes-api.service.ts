import { IClothes } from './iclothes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothesApiService {

  private _siteURL = 'http://localhost:3000/clothes_data';

  constructor(private _http: HttpClient) { }

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
