import { Injectable } from '@angular/core';
import { Observable, from, of, Subject } from '../../../node_modules/rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  constructor(private httpClient: HttpClient) { }
  packageSubject = new Subject();
  downloadSubject = new Subject();
  getAllPackages(search:string): Observable<any> {
    let configUrl = `https://api.npms.io/v2/search/suggestions?q=${[[search]]}&size=40`;
    return this.httpClient.get(configUrl);
  }
  getAllDownloads(start:string,end:string,search:string): Observable<any> {
    let configUrl = `https://api.npmjs.org/downloads/point/${start}:${end}/${search}`;
    return this.httpClient.get(configUrl);
  }
}
