import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  isConnect! : boolean

  constructor(private readonly authServe : AuthService) { }

  ngOnInit(): void {
    this.authServe.isConnect$.subscribe({
      next : (isConnect : boolean) => {
        this.isConnect = isConnect
      }
    })
  }

}
