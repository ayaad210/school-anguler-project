import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Teacher, TeacherVModel } from 'src/app/Interfaces/myinterfaces';
import { SubjectService } from 'src/app/Services/subject.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-teacher-add-edit',
  templateUrl: './teacher-add-edit.component.html',
  styleUrls: ['./teacher-add-edit.component.css']
})
export class TeacherAddEditComponent implements OnInit {

  @Input("selectedOne") selectedOne:Teacher;

  techModel:TeacherVModel;
  AllSubjectist: Subject[];
  form:FormData;
  filename:string;
  showinmageurl:string|ArrayBuffer
  message: string;
  constructor(private techservice:TeacherService,private subservice:SubjectService) { }

  ngOnInit(): void {
    console.log("selected one");    console.log(this.selectedOne)

    this.loaddropdownlist();

   this.getdata();
  }

  getdata(){
    
    


    if  (  this.selectedOne )
    {
if  (this.selectedOne.id>0)

   { 
     this.techModel=<TeacherVModel>{
   id:this.selectedOne.id,
  

      name:this.selectedOne.user.name,
      email:this.selectedOne.user.email,
      age:this.selectedOne.user.age,
      photoFileName:this.selectedOne.user.photoFileName,
      subjectid:this.selectedOne.subjectid,
      subjectname:this.selectedOne.subject.name,
      
      password:"not changed",
      confirmPassword:"not changed"
    

    }
    this.showinmageurl=localStorage.getItem("mainurl")+"/photos/"+this.techModel.photoFileName;
      return
   } 

  }
    this .techModel =<TeacherVModel>{ id:0,
     name:"",
     email:"",
     age:0,
     photoFileName:null,
     subjectid:0,


     

    }
  }
  loaddropdownlist()
  {
    this.subservice.GetSubjects().subscribe(
      data=>{this.AllSubjectist=<Subject[]>data;}

    );
  }
  
  onaddclick(){

     this.techservice.CreateTeacher(this.techModel,this.form).subscribe(
      
      
      (data:any)=>{alert(data.value)},
       (error:any)=>{alert(error.error)}
       
      
    
    
   );
    
      }
    
      onEditclick(){
        this.techservice.UpdateTeacher(this.techModel,this.form,this.selectedOne.user.photoFileName).subscribe( 
           (data:any)=>{alert(data.value)},
          (error:any)=>{alert(error.error)}
          
         );
    
      }
  
    onsupmit(form:NgForm){
   

     this.techModel.name=(form.value).name;
     this.techModel.age=(form.value).age;
     this.techModel.email=(form.value).email;
     this.techModel.subjectid=(form.value).subjectid;
   



    
    if (this.techModel.id==0)
    {
      this.techModel.password=(form.value).password;
      this.techModel.confirmPassword=(form.value).confirmPassword;
      this.onaddclick();
    }
    if(this.techModel.id>0){
      
      this.onEditclick();
    }
    
    }

    handleFileInput(event){
      var file=event.target.files[0];
this.previewiamge(event.target.files)
     var time=new Date();
    var newname =time.getMinutes().toString()+time.getDay().toString()+time.getMilliseconds().toString() +file.name;
      const formData:FormData=new FormData();
      formData.append('uploadedFile',file,newname);
      this.form=formData;
      this.techModel.photoFileName=  newname;
    }
    
    previewiamge(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
     // this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.showinmageurl = reader.result; 
      }
    }
}
