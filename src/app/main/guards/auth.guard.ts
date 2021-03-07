import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService:AuthService,
    private router:Router
  ){}

  canActivate(){
    !this._authService.getIsLoged()? this.router.navigate(['']): null;
    return this._authService.getIsLoged();
  }
  
}
