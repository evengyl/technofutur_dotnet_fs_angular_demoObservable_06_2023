import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  listCountry : any[] = []
  isConnect! : boolean

  constructor(
    private readonly countryServe : CountryService,
    private readonly authServe : AuthService
  ) { }

  ngOnInit(): void {
    this.countryServe.getAllCountries().subscribe({
      next : (listCountry) => {
        this.listCountry = listCountry
      }
    })

    this.authServe.isConnect$.subscribe({
      next : (isConnect : boolean) => {
        this.isConnect = isConnect
      }
    })
  }

  login(){
    this.authServe.login()
  }

  logout(){
    this.authServe.logout()
  }

}
