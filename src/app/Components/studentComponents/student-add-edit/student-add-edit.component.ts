import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Semester, Student, StudentVModel } from 'src/app/Interfaces/myinterfaces';
import { GroupService } from 'src/app/Services/group.service';
import { SemesterService } from 'src/app/Services/semester.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-add-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrls: ['./student-add-edit.component.css']
})
export class StudentAddEditComponent implements OnInit {

  @Input("selectedOne") selectedOne:Student;

  Model:StudentVModel;
  AllSemesters: Semester[];
  form:FormData;
  filename:string;
  showinmageurl:string|ArrayBuffer
  message: string;
  constructor(private stservice:StudentService,private semservice:SemesterService) { }

  ngOnInit(): void {
    console.log("selected one"); 
       console.log(this.selectedOne)

    this.loaddropdownlist();

   this.getdata();
  }

  getdata(){
    
    


    if  (  this.selectedOne )
    {
if  (this.selectedOne.id>0)

   { 
     this.Model=<StudentVModel>{
   studentID:this.selectedOne.id,
  

      name:this.selectedOne.user.name,
      email:this.selectedOne.user.email,
      age:this.selectedOne.user.age,
      photoFileName:this.selectedOne.user.photoFileName,
      
      password:"not changed",
      confirmPassword:"not changed",
      currentSemmesterID:this.selectedOne.currentSemesterId,
      userid:this.selectedOne.user.id,
      points:this.selectedOne.points
      



    }
    this.showinmageurl=localStorage.getItem("mainurl")+"/photos/"+this.Model.photoFileName;
      return
   } 

  }
    this .Model =<StudentVModel>{ 
      studentID:0,
     name:"",
     email:"",
     age:0,
     photoFileName:null,
     currentSemmesterID:0



     

    }
  }
  loaddropdownlist()
  {
    this.semservice.GetSemetsrs().subscribe(
      data=>{this.AllSemesters=<Semester[]>data;}

    );
  }
  
  onaddclick(){

     this.stservice.CreateStudent(this.Model,this.form).subscribe(
            
      (data:any)=>{alert(data.value)},
       (error:any)=>{alert(error.error)}
       
      
    
    
   );
    
      }
    
      onEditclick(){
        this.stservice.UpdateStudent(this.Model,this.form,this.selectedOne.user.photoFileName).subscribe( 
           (data:any)=>{alert(data.value)},
          (error:any)=>{alert(error.error)}
          
         );
    
      }
  
    onsupmit(form:NgForm){
   

     this.Model.name=(form.value).name;
     this.Model.age=(form.value).age;
     this.Model.email=(form.value).email;
     this.Model.currentSemmesterID=(form.value).currentSemmesterID;
     this.Model.points=(form.value).points;
     




    
    if (this.Model.studentID==0)
    {
      this.Model.password=(form.value).password;
      this.Model.confirmPassword=(form.value).confirmPassword;
      this.onaddclick();
    }
    if(this.Model.studentID>0){
      
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
      this.Model.photoFileName=  newname;
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

