import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_KEY = '63deb951a6e3414ba663ef7facea9ac7';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getNewsList() {
    return this.http.get(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=' + API_KEY
    );
  }
}
