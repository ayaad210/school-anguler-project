import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  List:Subject[];
  selectedOne:Subject;
  ModalTitle:String;
  ActivateAddEditEmpComp:boolean=false;
  currentpersonid: string;
  currentUserRole: string;
  constructor(private suservice:SubjectService,private acc:AccountService) { 


  }

  ngOnInit(): void {
    
    this.refreshlist();
    this.acc.currentpersonid.subscribe(data=>{this.currentpersonid=data
    this.acc.currentUserRole.subscribe(data=>{this.currentUserRole=data ;this.refreshlist()});
  });
  }

  OnclickEdit(item :Subject){
    this.selectedOne=item;
    this.ModalTitle="Edit subject";
    this.ActivateAddEditEmpComp=true;//عشان يحمل الداتا صح
    }

    OnclickDelete(item :Subject){
      var sure= confirm("are you shure deleteing it ??")
    if( sure.valueOf){
    
    this.suservice.DeleteSubject(item.id).subscribe(data=>{this.refreshlist();})
    
    
    }
      }
    
    
      onaddclick(){
        this.selectedOne=<Subject>{name:"",id:0}
        this.ModalTitle="Add subject";
        this.ActivateAddEditEmpComp=true;
    this.selectedOne=<Subject>{id:0,name:""}
    
      }
      closeClick(){
    
        this.ActivateAddEditEmpComp=false;
        this.refreshlist();
        this.selectedOne=<Subject>{id:0}
    
      }
      refreshlist(){
        if(this.currentUserRole=="students"){
          this.suservice.GetSubjectsBystudentid(this.currentpersonid).subscribe(data=>{
            this.List=<Subject[]>data;
          })
          return
        }

        this.suservice.GetSubjects().subscribe(data=>{
          this.List=<Subject[]>data;
        })
      }




}
