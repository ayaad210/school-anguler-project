import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Answer } from '../Interfaces/myinterfaces';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
 
  private apiurl : string = localStorage.getItem("mainurl")+"/Answers";

  constructor(private http:HttpClient) { }
  getAnswerByStudentAndTask(studentid: any, taskid: any) {

    let params = new HttpParams()
    .append('studentid',studentid).append('taskid',taskid);


    return this.http.get<any>(this.apiurl+'/getAnswerByStudentAndTask',{params:params});    

    
  }
  
  GetStasks():Observable<any[]>{
    return this.http.get<any>(this.apiurl+'/GetStasks');    
  }

  GetAnswerBYId(val:any){

    return this.http.get(this.apiurl+'/GetAnswerBYId'+"/"+val)//
  }
  
  GetAnswersByTaskId(val:any){
     let params = new HttpParams()
    .append('taskid',val);
    return this.http.get(this.apiurl+'/GetAnswersByTaskId',{params:params})//
  }


  AddAnswer(answer:Answer){
    return this.http.post(this.apiurl+'/AddAnswer',answer)
  }
  UpdateAnswer(answer:Answer){
    return this.http.put(this.apiurl+'/UpdateAnswer',answer)
  }

  DeleteAnswer(id:any):Observable<any[]>{


    let params = new HttpParams();
    return  this.http.delete<any>(this.apiurl+'/DeleteAnswer/'+id)
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
