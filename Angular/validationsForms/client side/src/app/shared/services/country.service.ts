import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  configUrl = 'https://restcountries.eu/rest/v2/all?fields=name';
  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<any> {
    // let url: string = this.basicURL+"/getList?fileName=country";
    // return this.httpClient.get<string[]>(url);
    return this.httpClient.get(this.configUrl);
  }
}
