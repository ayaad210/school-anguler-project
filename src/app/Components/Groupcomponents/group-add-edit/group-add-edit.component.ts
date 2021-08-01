import { group } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Group } from 'src/app/Interfaces/myinterfaces';
import { GroupService } from 'src/app/Services/group.service';

@Component({
  selector: 'app-group-add-edit',
  templateUrl: './group-add-edit.component.html',
  styleUrls: ['./group-add-edit.component.css']
})
export class GroupAddEditComponent implements OnInit {

  @Input("selectedOne") selectedOne:Group;
  @Input("semesterid") semesterid:number;
  @Input("semestername") semestername:string;

  group:Group;
  constructor(private grpservice:GroupService) { }

  ngOnInit(): void {
    if  ( this.selectedOne.id>0){
      this.group=this.selectedOne;

    }else{
      this.group=<Group>{id:0, name:""}
    }
  }
  
  onaddclick(){
    this.grpservice.CreateGroup(this.group).subscribe(
      
      (data:any)=>{alert(data.value)},
       (error:any)=>{alert(error.error)}
       
      
    
    
    );
    
      }
    
      onEditclick(){
        this.grpservice.UpdateGroup(this.group).subscribe( 
           (data:any)=>{alert(data.value)},
          (error:any)=>{alert(error.error)}
          
         );
    
      }
  
    onsupmit(form:NgForm){
     this.group.name=(<Group>form.value).name;
    
    if (this.group.id==0)
    {   
      this.group.semesterId=Number( this.semesterid);

      this.onaddclick();
    
    }
    if(this.group.id>0){
      this.onEditclick();
    }
    
    }}