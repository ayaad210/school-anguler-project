import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
//import * as jwt_decode from "jwt-decode";

import { ExternalLoginVModel, LoginVModel } from '../Interfaces/myinterfaces';


@Injectable({
    providedIn: 'root'
})
export class AccountService implements OnInit {

    private baseUrlLogin: string = localStorage.getItem("mainurl") + "/account/login";
    private exloginurl: string = localStorage.getItem("mainurl") + "/account/ExternalLogin";

    private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
    private UserName = new BehaviorSubject<string>(localStorage.getItem('username'));
    private UserRole = new BehaviorSubject<string>(localStorage.getItem('userrole'));
    private personid = new BehaviorSubject<string>(localStorage.getItem('personid'));

    constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService
        ,
        private _jwtHelper: JwtHelperService, private _externalAuthService: SocialAuthService

    ) { }
    // private _envUrl: EnvironmentUrlService,
    ngOnInit(): void {

    }



    ExternalLogin(model: ExternalLoginVModel) {
        // pipe() let you combine multiple functions into a single function. 
        // pipe() runs the composed functions in sequence.
        console.log("user google" + model.provider)

        return this.http.post<any>(this.exloginurl, model).pipe(

            map(result => {

                // login successful if there's a jwt token in the response
                if (result && result.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes

                    this.loginStatus.next(true);
                    localStorage.setItem('loginStatus', '1');
                    localStorage.setItem('jwt', result.token);
                    // var decoded= this.jwtHelper.decodeToken(result.token);



                    let jwtData = result.token.split('.')[1]
                    let decodedJwtJsonData = window.atob(jwtData)
                    let decodedJwtData = JSON.parse(decodedJwtJsonData)


                    // console.log('jwtData: ' + jwtData)
                    // console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
                    // console.log('decodedJwtData: ' + decodedJwtData)




                    localStorage.setItem('username', decodedJwtData.sub);
                    localStorage.setItem('expiration', decodedJwtData.exp);
                    localStorage.setItem('userrole', decodedJwtData.role);
                    localStorage.setItem('personid', decodedJwtData.PersonId);

                    this.UserName.next(localStorage.getItem('username'));
                    this.UserRole.next(localStorage.getItem('userrole'));
                    this.personid.next(localStorage.getItem('personid'));



                }

                return result.token;

            })

        );
    }




    //Login Method
    login(model: LoginVModel) {
        // pipe() let you combine multiple functions into a single function. 
        // pipe() runs the composed functions in sequence.

        return this.http.post<any>(this.baseUrlLogin, model).pipe(

            map(result => {

                // login successful if there's a jwt token in the response
                if (result && result.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes

                    this.loginStatus.next(true);
                    localStorage.setItem('loginStatus', '1');
                    localStorage.setItem('jwt', result.token);
                    // var decoded= this.jwtHelper.decodeToken(result.token);



                    let jwtData = result.token.split('.')[1]
                    let decodedJwtJsonData = window.atob(jwtData)
                    let decodedJwtData = JSON.parse(decodedJwtJsonData)


                    // console.log('jwtData: ' + jwtData)
                    // console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
                    // console.log('decodedJwtData: ' + decodedJwtData)




                    localStorage.setItem('username', decodedJwtData.sub);
                    localStorage.setItem('expiration', decodedJwtData.exp);
                    localStorage.setItem('userrole', decodedJwtData.role);
                    localStorage.setItem('personid', decodedJwtData.PersonId);

                    this.UserName.next(localStorage.getItem('username'));
                    this.UserRole.next(localStorage.getItem('userrole'));
                    this.personid.next(localStorage.getItem('personid'));



                }

                return result.token;

            })

        );
    }

    logout() {
        // Set Loginstatus to false and delete saved jwt cookie
        this.loginStatus.next(false);
        //    localStorage.clear();
        localStorage.removeItem('jwt');
        localStorage.removeItem('userrole');
        localStorage.removeItem('username');
        localStorage.removeItem('expiration');
        localStorage.removeItem('personid');
        localStorage.setItem('loginStatus', '0');
        this.router.navigate(['/login']);
        console.log("Logged Out Successfully");

    }





    public signInWithGoogle = () => {
        return this._externalAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    public signOutExternal = () => {
        this._externalAuthService.signOut();
    }











    checkLoginStatus(): boolean {

        var loginCookie = localStorage.getItem("loginStatus");
        if (loginCookie == "1") {
            if (localStorage.getItem('jwt') === null || localStorage.getItem('jwt') === undefined) {
                return false;
            }

            // Get and Decode the Token
            const token = localStorage.getItem('jwt');
            const decoded = this.jwtHelper.decodeToken(token);//طريقة تانية للديكود
            // Check if the cookie is valid
            if (decoded.exp === undefined) ///ch
            {
                return false;
            }


            //Get Current Date Time
            const date = new Date(0);

            //Convert EXp Time to UTC
            let tokenExpDate = date.setUTCSeconds(decoded.exp);///ch

            //If Value of Token time greter than 
            console.log("NEW DATE " + new Date().valueOf());
            console.log("Token DATE " + tokenExpDate.valueOf());

            if (tokenExpDate.valueOf() > new Date().valueOf()) {
                return true;
            }





            return false;

        }
        return false;
    }







    get isLoggesIn() {
        return this.loginStatus.asObservable();
    }

    get currentUserName() {
        return this.UserName.asObservable();
    }

    get currentUserRole() {
        return this.UserRole.asObservable();
    }
    get currentpersonid() {
        return this.personid.asObservable();
    }


}