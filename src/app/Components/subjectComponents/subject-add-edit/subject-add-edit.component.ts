import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'src/app/Interfaces/myinterfaces';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-subject-add-edit',
  templateUrl: './subject-add-edit.component.html',
  styleUrls: ['./subject-add-edit.component.css']
})
export class SubjectAddEditComponent implements OnInit {
  @Input("selectedOne") selectedOne:Subject;

  subject:Subject;
  constructor(private subservice:SubjectService) { }

  ngOnInit(): void {
    if  ( this.selectedOne.id>0){
      this.subject=this.selectedOne;

    }else{
      this.subject=<Subject>{id:0, name:""}
    }
  }
  
  onaddclick(){
    this.subservice.CreateSubject(this.subject).subscribe(
      
      (data:any)=>{alert(data.value)},
       (error:any)=>{alert(error.error)}
       
      
    
    
    );
    
      }
    
      onEditclick(){
        this.subservice.UpdateSubject(this.subject).subscribe( 
           (data:any)=>{alert(data.value)},
          (error:any)=>{alert(error.error)}
          
         );
    
      }
  
    onsupmit(form:NgForm){
     this.subject.name=(<Subject>form.value).name;
    console.log((<Subject>form.value).name);
    
    if (this.subject.id==0)
    {this.onaddclick();}
    if(this.subject.id>0){
      this.onEditclick();
    }
    
    }

}
