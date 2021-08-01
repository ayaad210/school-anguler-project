import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STask } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  List:STask[];
  selectedOne:STask;
  ModalTitle:String;
  ActivateAddEditEmpComp:boolean=false;
  subjectid: string;
  constructor(private taskervice:TaskService,private route:ActivatedRoute,private acc :AccountService) { }
  groupid:string;
  groupname:string;
  currentUserRole:string;
  currentpersonid:string;

  ngOnInit(): void {

  this.route.queryParamMap.subscribe(p2=> {this.groupid= p2.get("groupid") ;  

  this.route.queryParamMap.subscribe(p1=>{ this.subjectid= p1.get("subjectid");
console.log("from quary");
  this.acc.currentpersonid.subscribe(data=>this.currentpersonid=data);
  this.acc.currentUserRole.subscribe(data=>this.currentUserRole=data);

})

}).add(this.refreshlist() )





 

  }

  OnclickEdit(item :STask){
    this.selectedOne=item;
    this.ModalTitle="Edit task";
    this.ActivateAddEditEmpComp=true;//عشان يحمل الداتا صح
    }

    OnclickDelete(item :STask){
      var sure= confirm("are you shure deleteing it ??")
    if( sure.valueOf){
    
    this.taskervice.DeleteStask(item.id).subscribe(data=>{this.refreshlist();})
    
    
    }
      }
    
    
      onaddclick(){
        this.selectedOne=<STask>{name:"",id:0}
        this.ModalTitle="Add task";
        this.ActivateAddEditEmpComp=true;
    this.selectedOne=<STask>{id:0,name:""}
    
      }
      closeClick(){
    
        this.ActivateAddEditEmpComp=false;
        this.refreshlist();
        this.selectedOne=<STask>{id:0}
    
      }
      refreshlist(){
// if(typeof( this.groupid)!="number"|| typeof( this.subjectid)!="number")
// {  
// return 
      
        
// }
;console.log("refersh");
          this.taskervice.GetStaskByGroupAndSubjectId(this.groupid,this.subjectid ,this.currentUserRole,this.currentpersonid).subscribe(data=>{
            this.List=<STask[]>data;})
        
 

}
}
