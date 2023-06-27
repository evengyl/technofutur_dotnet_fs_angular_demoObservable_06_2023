import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private readonly httpC : HttpClient) {

  }

  getAllCountries() : Observable<any[]>
  {
    return this.httpC.get<any[]>("https://restcountries.com/v3.1/all")
  }

  
}
