import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Semester ,Subject} from '../Interfaces/myinterfaces';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiurl : string = localStorage.getItem("mainurl")+"/Subjects";

  constructor(private http:HttpClient) { }






  GetSubjects():Observable<any[]>{
    return this.http.get<any>(this.apiurl+'/GetSubjects');    
  }
  GetSubjectsBystudentid(val:any){
    return this.http.get(this.apiurl+'/GetSubjectsBystudentid'+"/"+val)//
  }

  GetSubjectByid(val:any){
    return this.http.get(this.apiurl+'/GetSubjectByid'+"/"+val)//
  }
  GetSubjectBygroupid(groupid:any){
    return this.http.get(this.apiurl+'/GetSubjectBygroupid'+"/"+groupid)//
  }
  CreateSubject(Subject:Subject){
    console.log(Subject);
    return this.http.post(this.apiurl+'/CreateSubject',Subject)
  }
  UpdateSubject(Subject:Subject){
    return this.http.put(this.apiurl+'/UpdateSubject',Subject)
  }

  DeleteSubject(id:any):Observable<any[]>{


    let params = new HttpParams();
    params = params.append('Subjectid',id);
    return  this.http.delete<any>(this.apiurl+'/DeleteSubject',{params:params})
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
