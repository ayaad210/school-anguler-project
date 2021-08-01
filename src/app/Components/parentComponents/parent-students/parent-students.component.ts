import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';
import { ParentService } from 'src/app/Services/parent.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-parent-students',
  templateUrl: './parent-students.component.html',
  styleUrls: ['./parent-students.component.css']
})
export class ParentStudentsComponent implements OnInit  ,OnChanges{
  @Input("parentid") parentid;
  activatecheldrencomponet: boolean;
  selectedprent: any;
  role:string;

  constructor(private route:ActivatedRoute,private parservice:ParentService,private stservice:StudentService,private acc:AccountService) { }


  students:Student[];
Allstudents:Student[];
selctedstudent:any;

  ngOnInit(): void {
  
   this.acc.currentUserRole.subscribe(data=>{
if(data==="Parents"){
      this.role=data;
      if (data){
        this.acc.currentpersonid.subscribe(data=>this.parentid=data)
        this.refreshlist();
      }    

  
  }
   })


  //  this.route.queryParamMap.subscribe(p=>{ this.semesterid= p.get("semesterid")});
  this.refreshlist();
  this.loaddropdownlist();

  }
  ngOnChanges(changes:SimpleChanges):void{
   this.refreshlist();

  }
  refreshlist(){
    this.stservice.GetParenStudents (this.parentid).subscribe(data=>
      {this.students=<Student[]>data
      
      
  })}

  loaddropdownlist(){

    this.stservice.GetAllStudent ().subscribe(
      data=>{this.Allstudents=data;
    });
  }

  ondeleteclick(id:number){
this.parservice.DeleteStudentToParent(this.parentid,id).subscribe(
  (data:any)=>{alert(data.value)},
   (error:any)=>{alert(error.error)},
   ()=>{this.refreshlist();}
)



  }

  onaddclick(){
    if(typeof( this.selctedstudent)==="number"){
      console.log("add click child"+Number(this.selctedstudent))
    this.parservice.InsertStudentToParent(Number(this.parentid) ,Number(this.selctedstudent)).subscribe(
      (data:any)=>{alert(data.value)},
       (error:any)=>{alert(error.error)},
       ()=>{this.refreshlist();   
}

    
    )
    // this.refreshlist();

  }
    else{
      alert("select student");
    }

  }
 
}
