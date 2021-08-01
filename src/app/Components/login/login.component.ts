import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { LoginVModel } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginvmodel:LoginVModel={email:"",password:"",rememberMe:false};
  constructor(private acc:AccountService,private router:Router) { }

  ngOnInit(): void {

    //this.acc.isLoggesIn.subscribe(data=> {console.log(data.valueOf);if(data.valueOf){ this.router.navigateByUrl("");}})

//console.log("addddd" + this.acc.isLoggesIn)


  }
    loginsubmit(form: NgForm)
   {
    this.loginvmodel.email=(<LoginVModel>form.value).email;
    this.loginvmodel.password=(<LoginVModel>form.value).password;
    this.loginvmodel.rememberMe=(<LoginVModel>form.value).rememberMe;

    console.log(this.loginvmodel)
     this.acc.login(this.loginvmodel).subscribe(
      (data: any) => {},
      (error: any) => alert(error.error),
      () =>  {this.router.navigateByUrl("")}


      );



    }





    public externalLogin = () => {
     // this.showError = false;
      this.acc.signInWithGoogle()
      .then(res => {
        const user: SocialUser = { ...res };
this.acc.ExternalLogin({email:user.email,provider:user.provider,nameidentifire:user.id,providertoken:user.idToken,rememberMe:false})
  .subscribe(
    (data: any) => {},
    (error: any) => alert(error.error),
    () =>  {this.router.navigateByUrl("")}


    );

        
        console.log(user);
      }, error => console.log("error "+error))

      


    }




}