import { HttpClient, HttpParams } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { from, Observable, of, scheduled } from 'rxjs';
import { map } from 'rxjs/operators';
import { Teacher, TeacherVModel } from '../Interfaces/myinterfaces';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiurl : string = localStorage.getItem("mainurl")+"/Teachers";

  constructor(private http:HttpClient) { }






  GetTeachers():Observable<any[]>{
    return this.http.get<any>(this.apiurl+'/GetTeachers');    
  }

  GetTeacherByid(val:any){
    return this.http.get(this.apiurl+'/GetTeacherByid'+"/"+val)//
  }
 
   CreateTeacher(Teacher:TeacherVModel, Form:FormData){
  
     this.saveimage(Form,"null").subscribe(data=>console.log(data.value));
    return this.http.post<any>(this.apiurl+'/CreateTeacher',Teacher)

   
 
    




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


  UpdateTeacher(Teacher:TeacherVModel, Form:FormData,oldphotoname:string ){
     this.saveimage(Form,oldphotoname).subscribe(data=>{});
          

    return this.http.put(this.apiurl+'/UpdateTeacher ',Teacher)
  }

  DeleteTeatcher(id:any):Observable<any[]>{


    let params = new HttpParams();
    params = params.append('Teacherid',id);
    return  this.http.delete<any>(this.apiurl+'/DeleteTeatcher',{params:params})
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