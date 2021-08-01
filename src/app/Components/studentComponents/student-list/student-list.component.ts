import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, StudentVModel } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  photosurl:string=localStorage.getItem("mainurl")+"/photos/"
  List:Student[];
  selectedOne:Student;
  ModalTitle:String;
  ActivateAddEditEmpComp:boolean=false;
  Allstudents: Student[];
  selectedstudent:any;
//showinmageurl:string=localStorage.getItem("mainurl")+"/photos/";

  constructor(private sthservice:StudentService,private acc:AccountService,private route: ActivatedRoute) { }
groupid:any;
semesterid: any;
role:string;
personid:any;

ngOnInit(): void {


this.route.queryParamMap.subscribe(p2=> {
  this.groupid= p2.get("groupid");
if(typeof(p2)!="number")
{

  this.acc.currentUserRole.subscribe(role=> {    this.role= role;  console.log("role"+role)  ; 
  this.acc.currentpersonid.subscribe(personid=> 
     {personid=personid ;
      console.log("person"+personid)
    this.refreshlist() 
      });
  
    });

}else{
  this.refreshlist();
}
  
});
this.route.queryParamMap.subscribe(route=> { 
  this.semesterid= route.get("semesterid");  
this.loaddropdownlist();
 });


  }

  loaddropdownlist(){
console.log("from load drop"+this.semesterid)
    this.sthservice.GetStudentBySemesterid(this.semesterid).subscribe(
      data=>{this.Allstudents=<Student[]>data;
    });
  }

  OnclickEdit(item :Student){
    this.selectedOne=item;

    this.ModalTitle="Edit student";
    this.ActivateAddEditEmpComp=true;//عشان يحمل الداتا صح
    }

    OnclickDelete(item :Student){
      var sure= confirm("are you shure deleteing it ??")
    if( sure.valueOf){
    
    this.sthservice.DeleteStudent(item.id).subscribe(data=>{this.refreshlist();})
    
    
    }
      }
    
    
      
      closeClick(){
    
        this.ActivateAddEditEmpComp=false;
        this.refreshlist();
        this.selectedOne=<Student>{id:0}
    
      }
      refreshlist(){

    if(this.groupid)
      {
        this.sthservice.GetGroupStudents(this.groupid).subscribe(data=>this.List=<Student[]>data )
      }
      else 
      { if(this.role="parents")
      {
      this.sthservice.GetParenStudents(this.personid).subscribe(data=>this.List=<Student[]>data )

      }
       if(this.role="admin"){

        this.sthservice.GetAllStudent().subscribe(data=>{
          this.List=<Student[]>data
        });
      }
    }
       

      }

      assignstudentstogroup(){
this.sthservice.InsertStudentTogroup(this.groupid,this.selectedstudent).subscribe( 
  (data:any)=>{alert(data.value)},
 (error:any)=>{alert(error.error)},
 ()=>{this.refreshlist();}
);
      }

      Removetudentstogroup(item){
        this.sthservice.DeleteStudentfromgroup(this.groupid,item.id).subscribe( 
          (data:any)=>{alert(data.value)},
         (error:any)=>{alert(error.error)},
         ()=>{this.refreshlist();}

         
        );
              }
    }
  