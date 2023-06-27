import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    isConnect : boolean = false
    isConnect$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnect)

  constructor() {

  }


  login(){
    this.isConnect = true
    this.isConnect$.next(this.isConnect)
  }

  logout(){
    this.isConnect = false
    this.isConnect$.next(this.isConnect)
  }
}
