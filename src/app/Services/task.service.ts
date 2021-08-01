import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { STask } from '../Interfaces/myinterfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiurl : string = localStorage.getItem("mainurl")+"/STasks";

  constructor(private http:HttpClient) { }

  
  GetStasks():Observable<any[]>{
    return this.http.get<any>(this.apiurl+'/GetStasks');    
  }

  GetStaskByid(val:any){

    return this.http.get(this.apiurl+'/GetStaskByid'+"/"+val)//
  }
  
  GetStaskByGroupAndSubjectId(GroupId:any,subjectid:any,role:any,personid:any){
    if(GroupId==null){
      GroupId="0";
    }
    if(subjectid==null){
      subjectid="0";
          }
     let params = new HttpParams()
  .append('groupid',GroupId)
  .append('subjectid',subjectid)
  .append('personid',personid)
  .append('role',role);
    return this.http.get(this.apiurl+'/GetStaskByGroupAndSubjectId',{params:params})//
  }


  CreateStask(task:STask){
   
    return this.http.post(this.apiurl+'/CreateStask',task)
  }
  UpdateStask(task:STask){
    return this.http.put(this.apiurl+'/UpdateStask',task)
  }

  DeleteStask(id:any):Observable<any[]>{


    let params = new HttpParams();
    params = params.append('Staskid',id);
    return  this.http.delete<any>(this.apiurl+'/DeleteStask',{params:params})
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
