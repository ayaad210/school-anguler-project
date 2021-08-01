import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Semester } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';
import { SemesterService } from 'src/app/Services/semester.service';

@Component({
  selector: 'app-semester-list',
  templateUrl: './semester-list.component.html',
  styleUrls: ['./semester-list.component.css']
})
export class SemesterListComponent implements OnInit {
semesters:Semester[];
selectedsemester:Semester;
ModalTitle:String;
ActivateAddEditEmpComp:boolean=false;
activatesubjectscomponet:boolean=false;
role:string;
  constructor(private semService:SemesterService,private acc:AccountService) { }
  ngOnInit(): void {
this.refreshlist();
this.acc.currentUserRole.subscribe(data=>this.role=data)
  }

OnclickEdit(item :Semester){
this.selectedsemester=item;
this.ModalTitle="Edit Semester";
this.ActivateAddEditEmpComp=true;//عشان يحمل الداتا صح
}
OnclickDelete(item :Semester){
  var sure= confirm("are you shure deleteing it ??")
if( sure.valueOf){

this.semService.DeleteSemester(item.id).subscribe(data=>{this.refreshlist();})


}
  }


  onaddclick(){
    this.selectedsemester=<Semester>{endDate:null,startDate:null,id:0,semesterName:""}
    this.ModalTitle="Add Semester";
    this.ActivateAddEditEmpComp=true;
this.selectedsemester=<Semester>{id:0,semesterName:""}

  }
  closeClick(){

    this.ActivateAddEditEmpComp=false;
    this.refreshlist();
    this.selectedsemester=<Semester>{id:0}

  }
  refreshlist(){
    this.semService.GetSemetsrs().subscribe(data=>{
      this.semesters=<Semester[]>data;
    })
  }


  osubjectsClick(item:any){
this.activatesubjectscomponet=true;
this.selectedsemester=item;

  }
  closesemestersubjects(){
    this.activatesubjectscomponet=false;

  }

  

}
