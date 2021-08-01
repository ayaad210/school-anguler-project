import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AdminRegisterVModel } from '../Interfaces/myinterfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  private baseUrlregAdmin : string = localStorage.getItem("mainurl")+"/account/AdminRegister";

  RegisterAdminAdmin(model :AdminRegisterVModel) 
  {
      // pipe() let you combine multiple functions into a single function. 
      // pipe() runs the composed functions in sequence.
      
      return this.http.post<any>(this.baseUrlregAdmin, model)
      .pipe(

        map(result =>
          {
         //registration was successful
         console.log("frooom re pipe map"+result);
         return result;
     
     }, error => 
     {
      console.log("frooom error pipe map"+error);

         return error;

     })

     )

          



}
}