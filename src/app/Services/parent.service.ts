import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParentVModel } from '../Interfaces/myinterfaces';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private apiurl : string = localStorage.getItem("mainurl")+"/parents";

  constructor(private http:HttpClient) { }






  GetParents():Observable<any[]>{
    return this.http.get<any>(this.apiurl+'/GetParents');    
  }

  GetParentByid(val:any){
    return this.http.get(this.apiurl+'/GetParentByid'+"/"+val)//
  }
 
  CreateParent(parent:ParentVModel, Form:FormData){
  
     this.saveimage(Form,"null").subscribe(data=>console.log(data.value));
    return this.http.post<any>(this.apiurl+'/CreateParent',parent)

   
 
    





  }

    saveimage(Form:FormData,old:string){
    //  return new Promise(resolve=>{
      console.log("fromm save"+Form)
      return  this.http.post<any>(this.apiurl+'/saveImage/'+old ,Form);//.pipe(
    
      

   
   
    
         
  }


  UpdateParent(parent:ParentVModel, Form:FormData,oldphotoname:string ){
     this.saveimage(Form,oldphotoname).subscribe(data=>{});
          

    return this.http.put(this.apiurl+'/UpdateParent ',parent)
  }

  DeleteParent(id:any):Observable<any[]>{


    let params = new HttpParams();
    params = params.append('Parentid',id);
    return  this.http.delete<any>(this.apiurl+'/DeleteParent',{params:params})
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



  InsertStudentToParent(Parentid:any,StudentId:any){
   // let params = new HttpParams();
    // params = params.append('semesterId' , semesterid);
console.log(Parentid+"==="+Parentid +"yyyyyyyyyyyyy")
    // params = params.append('Subjectid', subjectid);


    return this.http.post(this.apiurl+'/InsertStudentToParent',{Parentid:Parentid,StudentId:StudentId})
  }


  DeleteStudentToParent(Parentid:any,StudentId:any){
    let params = new HttpParams();
    params = params.append('Parentid' , Parentid);

    params = params.append('StudentId', StudentId);


    return this.http.delete(this.apiurl+'/DeleteStudentToParent',{params:params})
  }
  






}