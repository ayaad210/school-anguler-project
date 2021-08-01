import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';
import { GroupService } from 'src/app/Services/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  
  List:Group[];
  selectedOne:Group;
  ModalTitle:String;
  ActivateAddEditEmpComp:boolean=false;
  role: any;
  constructor(private grpervice:GroupService,private route:ActivatedRoute,private acc:AccountService) { }
  semesterid:string;
  semestername:string;

  ngOnInit(): void {
    this.acc.currentUserRole.subscribe(data=>this.role=data)

  this.route.queryParamMap.subscribe(p2=> {this.semestername= p2.get("semestername");});

     this.route.queryParamMap.subscribe(p1=>{ this.semesterid= p1.get("semesterid")}).add(    this.refreshlist()
     );

  }

  OnclickEdit(item :Group){
    this.selectedOne=item;
    this.ModalTitle="Edit subject";
    this.ActivateAddEditEmpComp=true;//عشان يحمل الداتا صح
    }

    OnclickDelete(item :Group){
      var sure= confirm("are you shure deleteing it ??")
    if( sure.valueOf){
    
    this.grpervice.DeleteGroup(item.id).subscribe(data=>{this.refreshlist();})
    
    
    }
      }
    
    
      onaddclick(){
        this.selectedOne=<Group>{name:"",id:0}
        this.ModalTitle="Add group";
        this.ActivateAddEditEmpComp=true;
    this.selectedOne=<Group>{id:0,name:""}
    
      }
      closeClick(){
    
        this.ActivateAddEditEmpComp=false;
        this.refreshlist();
        this.selectedOne=<Group>{id:0}
    
      }
      refreshlist(){
if(this.semesterid=="0"||this.semesterid==""||this.semesterid==null)
{  
return
      
        
      }
        
  this.grpervice.GetGroupBySemesterid(this.semesterid).subscribe(data=>{
    this.List=<Group[]>data;})

}
}
