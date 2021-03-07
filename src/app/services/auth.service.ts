import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoged:boolean = false;

  constructor() { }

  login(body:{email:string,password:string}){
    console.log(body);
    const {email,password} = body;
    if(email === 'bryan.cedeo@gmail.com' && password === '123456789'){
      this.isLoged = true;
    }
  }

  getIsLoged(){
    return this.isLoged;
  }
}
