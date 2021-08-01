import { group } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentVModel } from '../Interfaces/myinterfaces';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiurl : string = localStorage.getItem("mainurl")+"/Student";

  constructor(private http:HttpClient) { }






  GetAllStudent():Observable<any[]>{
    return this.http.get<any>(this.apiurl+'/GetAllStudent');    
  }

  GetStudentById(studentid:any){
    return this.http.get(this.apiurl+'/GetStudentById'+"/"+studentid)//
  }

  GetStudentBySemesterid(semesterid:any){
    return this.http.get(this.apiurl+'/GetStudentBySemesterid'+"/"+semesterid)//
  }

  GetGroupStudents(groupid:any){
    return this.http.get(this.apiurl+'/GetGroupStudents'+"/"+groupid)//
  }


  GetParenStudents(perantid:any){
    return this.http.get(this.apiurl+'/GetParenStudents'+"/"+perantid)//
  }

  GetStudentprogressbygroupid(StudentId:any):Observable<any[]>{
    let params = new HttpParams();
    params = params.append('StudentId',StudentId);
    return this.http.get<any>(this.apiurl+'/GetStudentprogressbygroupid',{params:params});    
  }


 




  CreateStudent(Teacher:StudentVModel, Form:FormData){
  
     this.saveimage(Form,"null").subscribe(data=>console.log(data.value));
    return this.http.post<any>(this.apiurl+'/CreateStudent',Teacher)

   
 
    




    // .pipe(

    //   map(result => {

    //     // login successful if there's a jwt token in the response
       

    //    Teacher.photoFileName= result.value;
    //     console.log("froooom"+Teacher.photoFileName);
         
      //          return this.http.post<any>(this.apiurl+'/CreateTeacher',Teacher) ;
               
     
            
       
         //   }    

      
     
      //)
      
      
    //  )

  }
    saveimage(Form:FormData,old:string){
    //  return new Promise(resolve=>{
      console.log("fromm save"+Form)
      return  this.http.post<any>(this.apiurl+'/saveImage/'+old ,Form);//.pipe(
    //      )
    //      .subscribe(
    //         (data:any) => {
    //             console.log(data);
    //             resolve(data);
    //      })
    // })

  //var res:string;
      //.subscribe((data)=>{ 
     //   res= data as string 
      
      //});
   
   
    
         
  }


  UpdateStudent(Teacher:StudentVModel, Form:FormData,oldphotoname:string ){
     this.saveimage(Form,oldphotoname).subscribe(data=>{});
          

    return this.http.put(this.apiurl+'/UpdateStudent ',Teacher)
  }

  DeleteStudent(id:any):Observable<any[]>{


    let params = new HttpParams();
    return  this.http.delete<any>(this.apiurl+'/DeleteStudent/'+id)
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


  InsertStudentTogroup(groupid:any,StudentId:any){
   // let params = new HttpParams();
    // params = params.append('semesterId' , semesterid);

    // params = params.append('Subjectid', subjectid);
console.log("from InsertStudentTogroup"+groupid +"/"+StudentId )

    return this.http.post(this.apiurl+'/InsertStudentTogroup',{groupid:groupid,studentid:StudentId})
  }


  DeleteStudentfromgroup(groupid:any,StudentId:any)
  {
    
    let params = new HttpParams()
    .append('groupid' , groupid)

    .append('StudentId', StudentId);


    return this.http.delete(this.apiurl+'/DeleteStudentfromgroup',{params:params})
  }
}



