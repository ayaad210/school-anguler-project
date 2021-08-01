import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AccountService } from '../Services/account-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class JwtInterceptor implements HttpInterceptor {

    constructor (private acct : AccountService) {}

    intercept(request : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>> 
    {
        // add authorization header with jwt token if available
        let currentuser = this.acct.isLoggesIn;
        let token = localStorage.getItem('jwt');

        if (currentuser && token !== undefined) 
        {
            request = request.clone({
                setHeaders: 
                {

                     Authorization: `Bearer ${token}`
                      
                    
                }
            });
            console.log(request)
        }

        return next.handle(request);
    }
}