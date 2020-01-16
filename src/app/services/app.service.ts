import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = 'https://selfcare-service.demo.melita.com/interview/api';

  constructor(private http: HttpClient) {}

  getOffers() {
    return this.http.get(`${this.baseUrl}/offers`);
  }

  getOfferSubscriptions(offerId) {
    return this.http.get(`${this.baseUrl}/offers/${offerId}/subscriptions`);
  }
}
