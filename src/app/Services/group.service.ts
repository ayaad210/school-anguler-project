import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from '../Interfaces/myinterfaces';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private apiurl : string = localStorage.getItem("mainurl")+"/Groups";

  constructor(private http:HttpClient) { }

  
  GetGroups():Observable<any[]>{
    return this.http.get<any>(this.apiurl+'/GetGroups');    
  }

  GetGroupByid(val:any){

    return this.http.get(this.apiurl+'/GetGroupByid'+"/"+val)//
  }
  
  GetGroupBySemesterid(val:any){
     let params = new HttpParams();
    params = params.append('semesterid',val);
    return this.http.get(this.apiurl+'/GetGroupBySemesterid',{params:params})//
  }


  CreateGroup(group:Group){
    console.log( "create group");
    console.log(group);
    return this.http.post(this.apiurl+'/CreateGroup',group)
  }
  UpdateGroup(group:Group){
    return this.http.put(this.apiurl+'/UpdateGroup',group)
  }

  DeleteGroup(id:any):Observable<any[]>{


    let params = new HttpParams();
    params = params.append('Groupid',id);
    return  this.http.delete<any>(this.apiurl+'/DeleteGroup',{params:params})
       .pipe(

      map(result =>
        {
       //registration was successful
       return result;
   
   }, error => 
   {

       return error;

   })

   )
     
  }


}
