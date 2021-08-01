import { group } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { STask } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.css']
})
export class TaskAddEditComponent implements OnInit {

  // this.route.queryParamMap.subscribe(p2=> {this.semestername= p2.get("semestername");});

  //    this.route.queryParamMap.subscribe(p1=>{ this.semesterid= p1.get("semesterid")}).add(    this.refreshlist()
  //    );

 // }
 
 
 @Input("selectedOne") selectedOne:STask;

 task:STask;
  groupid: string;
  personid: string;
 constructor(private taskservice:TaskService,private acc:AccountService,private route :ActivatedRoute) { }
 ngOnInit(): void {

     this.route.queryParamMap.subscribe(p1=>{ this.groupid= p1.get("groupid")});
     this.acc.currentpersonid.subscribe(data=>this.personid=data)


  if  ( this.selectedOne.id>0){
    this.task=this.selectedOne;

  }else{
    this.task=<STask>{id:0, name:""}
  }

}


onaddclick(){
  this.taskservice.CreateStask(this.task).subscribe(
    
    (data:any)=>{alert(data.value)},
     (error:any)=>{alert(error.error)}
     
    
  
  
  );
  
    }
  
    onEditclick(){
      this.taskservice.UpdateStask(this.task).subscribe( 
         (data:any)=>{alert(data.value)},
        (error:any)=>{alert(error.error)}
        
       );
  
    }

  onsupmit(form:NgForm){
   this.task.name=(<STask>form.value).name;
   this.task.notes=(<STask>form.value).notes;
   this.task.content=(<STask>form.value).content;
   this.task.groupid=Number( this.groupid);
   this.task.total=(<STask>form.value).total;
   this.task.teacherid=Number(this.personid);
   this.task.type=(<STask>form.value).type;




  if (this.task.id==0)
  {   
  
    this.onaddclick();
  
  }
  if(this.task.id>0){
    this.onEditclick();
  }
  
  }}