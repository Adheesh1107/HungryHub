import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { OfferResponseData } from 'src/app/models/offer.model';
import { OrderResponseData } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root',
})
export class FoodDetailsService {
  constructor(private http: HttpClient) {}

  fetchOrders() {
    return this.http
      .get<OrderResponseData>(
        'https://run.mocky.io/v3/69cd6951-b66d-483f-bece-278ac4fd91a6'
      )
      .pipe(catchError(this.handleError));
  }

  fetchOffers() {
    return this.http
      .get<OfferResponseData>(
        'https://run.mocky.io/v3/a64aee04-fa14-4552-9c47-a789f1364366'
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorObject: HttpErrorResponse) {
    let errorMessage = 'unknown error!';
    if (errorObject?.status === 404) {
      errorMessage = 'Unable to fetch details!';
    } else if (errorObject?.status === 500) {
      errorMessage = 'Server not accessible';
    }
    return throwError(errorMessage);
  }
}
