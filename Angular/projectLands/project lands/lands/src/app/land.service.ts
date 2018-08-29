import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor(private http: HttpClient) {

  }
  configUrl = 'https://restcountries.eu/rest/v2/all?fields=name;nativeName;capital;population;flag';
  showConfig(): Observable<any> {
    return this.http.get(this.configUrl);
  }
  search(): Observable<any> {
    return this.http.get(this.configUrl);
  }
}
