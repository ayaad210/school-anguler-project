import { Component, OnInit } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { Teacher } from 'src/app/Interfaces/myinterfaces';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {
photosurl:string=localStorage.getItem("mainurl")+"/photos/"
  List:Teacher[];
  selectedOne:Teacher;
  ModalTitle:String;
  ActivateAddEditEmpComp:boolean=false;
//showinmageurl:string=localStorage.getItem("mainurl")+"/photos/";

  constructor(private techervice:TeacherService) { }

  ngOnInit(): void {
    this.refreshlist();
  }

  OnclickEdit(item :Teacher){
    this.selectedOne=item;

    this.ModalTitle="Edit teacher";
    this.ActivateAddEditEmpComp=true;//عشان يحمل الداتا صح
    }

    OnclickDelete(item :Teacher){
      var sure= confirm("are you shure deleteing it ??")
    if( sure.valueOf){
    
    this.techervice.DeleteTeatcher(item.id).subscribe(data=>{this.refreshlist();})
    
    
    }
      }
    
    
      
      closeClick(){
    
        this.ActivateAddEditEmpComp=false;
        this.refreshlist();
        this.selectedOne=<Teacher>{id:0}
    
      }
      refreshlist(){
        this.techervice.GetTeachers().subscribe(data=>{
          this.List=<Teacher[]>data;console.log("get techer") ;console.log(data)
        })

      }




}
