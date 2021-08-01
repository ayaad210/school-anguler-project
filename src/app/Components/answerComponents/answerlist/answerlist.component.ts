import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/Interfaces/myinterfaces';
import { AnswerService } from 'src/app/Services/answer.service';

@Component({
  selector: 'app-answerlist',
  templateUrl: './answerlist.component.html',
  styleUrls: ['./answerlist.component.css']
})
export class AnswerlistComponent implements OnInit {



  
    List:Answer[];
    selectedOne:Answer;
    ModalTitle:String;
    ActivateAddEditEmpComp:boolean=false;
    constructor(private ansservice:AnswerService,private route:ActivatedRoute) { }
    taskid:string;
  
    ngOnInit(): void {
  
    this.route.queryParamMap.subscribe(p2=> {this.taskid= p2.get("taskid"); this.refreshlist()});
  
       
       
  
    }
  
    OnclickEdit(item :Answer){
      this.selectedOne=item;
      this.ModalTitle="Edit task";
      this.ActivateAddEditEmpComp=true;//عشان يحمل الداتا صح
      }
  
      OnclickDelete(item :Answer){
        var sure= confirm("are you shure deleteing it ??")
      if( sure.valueOf){
      
      this.ansservice.DeleteAnswer(item.id).subscribe(data=>{this.refreshlist();})
      
      
      }
        }
      
      
        onaddclick(){
          this.selectedOne=<Answer>{id:0}
          this.ModalTitle="Add answer";
          this.ActivateAddEditEmpComp=true;
      this.selectedOne=<Answer>{id:0}
      
        }
        closeClick(){
      
          this.ActivateAddEditEmpComp=false;
          this.refreshlist();
          this.selectedOne=<Answer>{id:0}
      
        }
        refreshlist(){
  if(this.taskid=="0"||this.taskid==null)
  {  


        return
        
          
        }
          
    this.ansservice.GetAnswersByTaskId(this.taskid).subscribe(data=>{
      this.List=<Answer[]>data;})
  
  }
  }
  