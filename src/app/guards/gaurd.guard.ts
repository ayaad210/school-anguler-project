import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AccountService } from '../Services/account-service.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdGuard implements CanActivate {
 

constructor(private acct : AccountService, private router: Router ) { }

canActivate( route: ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> 
{
    return this.acct.isLoggesIn.pipe(take(1), map((loginStatus : boolean) => 
    {
          const destination: string  = state.url;
          
          const productId = route.params.id; 
          const role=localStorage.getItem("userrole");


        // To check if user is not logged in
        if(!loginStatus) 
        {
       
            this.router.navigate(['/login'], {queryParams: {returnUrl : state.url}});

            return false;
        }

        // if the user is already logged in
       
        
      
               if(destination.includes("/semesterslist"))
              { 

                if(role==="admin"||role=="teachers")
                {
                  return true;

                }


              }

              
              

              if(destination.includes('/parentstudents'))
            {
              if(role==="admin"||role=="Parents")
              {
                return true;

              }
            }
              if(destination.includes('/grouplist'))
            {
              if(role==="admin"||role=="teachers")
              {
                return true;

              }
            }
            if(destination.includes('/grouplist'))
              {
                if(role==="admin"||role=="teachers")
                {
                  return true;
  
                }
              }

              if(destination.includes('/Teacherlist' ))
            {
              if(role==="admin")
              {
                return true;

              }

            }
            if(destination.includes( '/StudentList'))
            {
              if(role==="admin")
              {
                return true;

              }

            } 
            if(destination.includes( '/parentlist' ))
            {
              if(role==="admin")
              {
                return true;

              }

            }
            if(destination.includes('/answerslist' ))
            {
              if(role==="teachers")
              {
                return true;

              }

            }
            if(destination.includes( '/answeaddedit' ))
            {
              if(role===" teachers"||role==="students")
              {
                return true;

              }
              

            }
            if(destination.includes( '/taskslist' ))
            {
              if(role==="teachers"||role==="students")
              {
                return true;

              }
              

            }
         
            if(destination.includes(  '/subjectlist' ))
            {
              if(role==="admin"||role==="students")
              {
                return true;

              }
              

            }

           
            console.log("from gaurd false"+role+"/"+destination)  ; return false;
        }           
      
    

  
             ) )}



}
