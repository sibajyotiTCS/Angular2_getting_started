import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'login-page',
  templateUrl: 'app/login/login-page.html'
})
export class LoginPage {

  public loginForm = new FormGroup({
    email:new FormControl("email",Validators.required),
    password:new FormControl("password",Validators.required),
  });

  constructor(public fb: FormBuilder,  private _router: Router) {
    
  }

  doLogin() {
    console.log(this.loginForm.value);
    if(this.loginForm.value.email == 'Shady@gmail.com' 
        && this.loginForm.value.password=='2015'
      ){
      this._router.navigate(['/products']);
    }else{
      this._router.navigate(['/welcome']);

    }
  }

}
