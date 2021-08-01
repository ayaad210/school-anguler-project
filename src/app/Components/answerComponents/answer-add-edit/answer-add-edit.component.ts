import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';
import { AnswerService } from 'src/app/Services/answer.service';

@Component({
  selector: 'app-answer-add-edit',
  templateUrl: './answer-add-edit.component.html',
  styleUrls: ['./answer-add-edit.component.css']
})
export class AnswerAddEditComponent implements OnInit {

  @Input("selectedOne") selectedOne:Answer;//
  @Input("taskid") taskid:number; 

  Answer:Answer=<Answer>{id:0,degree:0,answerContent:""}
  personid: any;
  role: string;
  constructor(private ansservice:AnswerService,private acc:AccountService,private route:ActivatedRoute) { }
  ngOnInit(): void {

    this.acc.currentpersonid.subscribe(data=>{this.personid=data; 
    this.route.queryParamMap.subscribe(p2=> {this.taskid= Number( p2.get("taskid"));
    this.acc.currentUserRole.subscribe(data=>{this.role=data;
    if(this.role=="students"){
      

      this.ansservice.getAnswerByStudentAndTask(this.personid,this.taskid).subscribe(
        
        data=>{  if(data!=null) {this.Answer=data;console.log("from getAnswerByStudentAndTask call");console.log(data)};
    
 
      }
      )

    }
      

    
   });
    });
  });

if(this.selectedOne){
  
  if  ( this.selectedOne.id>0){
    this.Answer=this.selectedOne;

  }else{
    this.Answer=<Answer>{id:0}
  }
}

  }
  
  onaddclick(){
    this.ansservice.AddAnswer(this.Answer).subscribe(
      
      (data:any)=>{alert(data.value)},
       (error:any)=>{alert(error.error)}
       
      
    
    
    );
    
      }
    
      onEditclick()
      {
        this.ansservice.UpdateAnswer(this.Answer).subscribe( 
           (data:any)=>{alert(data.value)},
          (error:any)=>{alert(error.error)}
          
         );
    
      }
  
    onsupmit(form:NgForm){
    this.Answer.answerContent=(<Answer>form.value).answerContent;
    this.Answer.degree=(<Answer>form.value).degree;
    this.Answer.sTaskid=this.taskid;
    this.Answer.studentId=this.personid;

    if (this.Answer.id==0)
    {   
      this.Answer.datetime=((new Date).toLocaleDateString()) as string;

      this.Answer.sTaskid=Number( this.taskid);

      this.onaddclick();
    

    }
    
    if(this.Answer.id>0){
      this.onEditclick();
    }
    
    }}