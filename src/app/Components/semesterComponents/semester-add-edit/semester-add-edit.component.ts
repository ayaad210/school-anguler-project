import { Component, Input, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Semester } from 'src/app/Interfaces/myinterfaces';
import { SemesterService } from 'src/app/Services/semester.service';

@Component({
  selector: 'app-semester-add-edit',
  templateUrl: './semester-add-edit.component.html',
  styleUrls: ['./semester-add-edit.component.css']
})
export class SemesterAddEditComponent implements OnInit {
@Input("selectedsemester") selectedsemester:Semester;

semester:Semester;
  constructor(private semsevice:SemesterService) { }

  ngOnInit(): void {
    if  (this.selectedsemester.id>0){
      this.semester=this.selectedsemester;

    }else{
      this.semester=<Semester>{id:0, semesterName:"",startDate:null,endDate:null}
    }
  }

  onaddclick(){
this.semsevice.AddSemester(this.semester).subscribe(
  
  (data:any)=>{alert(data.value)},
   (error:any)=>{alert(error.error)}
   
  


);

  }

  onEditclick(){
    this.semsevice.UpdateSemester(this.semester).subscribe(
      (data:any)=>{alert(data.value)},
      (error:any)=>{alert(error.error)}
      
     
   
   
   );
  }
//   updateendtdate(event) {

//     this.semester.endDate = new Date(event);
// }
//   updatestartdate(event) {

//     this.semester.startDate = new Date(event);
// }

onsupmit(form:NgForm){
 this.semester.semesterName=(<Semester>form.value).semesterName;

  this.semester.startDate   =(<Semester>form.value).startDate;

  this.semester.endDate=(<Semester>form.value).endDate;

if (this.semester.id==0)
{this.onaddclick();}
if(this.semester.id>0){
  this.onEditclick();
}

}
}
