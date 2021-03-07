import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!:FormGroup;

  constructor(
    private _authService:AuthService,
    private formBuider:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuider.group({
      email: ['',{
        validators: [
          Validators.required,
          Validators.email
        ]
      }],
      password: ['', {
        validators: [
          Validators.required,
          Validators.minLength(8)
        ]
      }]
    })
  }

  loginClick(){
    this._authService.login(this.form.value);
    if(this._authService.getIsLoged() === true){
      this.router.navigate(['/home'])
    }
  }

  getEmailErrors(){
    const email = this.form.get('email');
    if(email?.getError('required')){
      return "El email es obligatorio"
    }
    if(email?.getError('email')){
      return "EL contenido debe ser un email"
    }
    return null;
  }

  getPassError(){
    const password = this.form.get('password');
    if(password?.getError('required')){
      return "El password es obligatorio"
    }
    if(password?.getError('minlength')){
      return "El password debe tener por lo menos 8 caracteres";
    }
    return null;
  }

}
