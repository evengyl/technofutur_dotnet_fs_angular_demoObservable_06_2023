import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  countCountry : number = 0
  isConnect! : boolean

  constructor(
    private readonly countryServe : CountryService,
    private readonly authServe : AuthService
  ) { }

  ngOnInit(): void {
    this.countryServe.getAllCountries().subscribe({
      next : (listCountry : any[]) => {
        this.countCountry = listCountry.length
      }
    })


    this.authServe.isConnect$.subscribe({
      next : (isConnect : boolean) => {
        this.isConnect = isConnect
      }
    })
  }

}
