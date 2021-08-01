import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Semester } from '../Interfaces/myinterfaces';

@Injectable({
  providedIn: 'root'
})

export class SemesterService {

  constructor(private http:HttpClient) { }

  


private apiurl : string = localStorage.getItem("mainurl")+"/Semester";


GetSemetsrs():Observable<any[]>{
    return this.http.get<any>(this.apiurl+'/GetSemetsrs');    
  }

  GetSemesterBYId(val:any){
    return this.http.get(this.apiurl+'/GetSemesterBYId'+"/"+val)//
  }
  
  AddSemester(semester:Semester){
    return this.http.post(this.apiurl+'/AddSemester',semester)
  }
 UpdateSemester(semester:Semester){
    return this.http.put(this.apiurl+'/UpdateSemester',semester)
  }

  DeleteSemester(id:any):Observable<any[]>{


    let params = new HttpParams();
    params = params.append('semesterid',id);
    return  this.http.delete<any>(this.apiurl+'/DeleteSemester',{params:params})
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

  AddSubjectToSemester(semesterid:any,subjectid:any){
    let params = new HttpParams();
    // params = params.append('semesterId' , semesterid);

    // params = params.append('Subjectid', subjectid);

    console.log(semesterid+"--"+subjectid)

    return this.http.post(this.apiurl+'/AddSubjectToSemester',{semesterid:semesterid,subjectid:subjectid})
  }
  DeleteSubjectTosemester(semesterid:any,subjectid:any){
    let params = new HttpParams();
    params = params.append('semesterId' , semesterid);

    params = params.append('Subjectid', subjectid);


    return this.http.delete(this.apiurl+'/DeleteSubjectTosemester',{params:params})
  }
  

  GetSemesterSubjects(semesterid:any){
    let params = new HttpParams();
    params = params.append('semesterid',semesterid);
   

    return this.http.get(this.apiurl+'/GetSemesterSubjects',{params:params})
  }

 
}