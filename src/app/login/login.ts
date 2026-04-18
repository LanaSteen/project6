import { Component } from '@angular/core';
import { Api } from '../services/api';
import { LoginUser } from '../models/user';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private api : Api){}

// stepacc210@gmail.com
// Stepacc210@gmail.com

loginUser : LoginUser = {
  email : "stepacc210@gmail.com",
  password : "Stepacc210@gmail.com"
}

  login(){
      // localStorage.setItem("token", "token")

      this.api.postObj("auth/login", this.loginUser)
      .subscribe((resp : any) =>{ 
         console.log(resp.data.accessToken);
         console.log(resp.data.refreshToken);
      })
  }


  // auth/login
}




// accessToken

// refreshToken

