import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Subject } from 'src/app/Interfaces/myinterfaces';
import { SemesterService } from 'src/app/Services/semester.service';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-subjects-of-semester',
  templateUrl: './subjects-of-semester.component.html',
  styleUrls: ['./subjects-of-semester.component.css']
})
export class SubjectsOfSemesterComponent implements OnInit ,OnChanges{
@Input("semesterid") semesterid;

  constructor(private route:ActivatedRoute,private semservice:SemesterService,private subservice:SubjectService) { }
subjects:Subject[];
AllSubjectist:Subject[];
selctedsubject:any
  ngOnInit(): void {
  //  this.route.queryParamMap.subscribe(p=>{ this.semesterid= p.get("semesterid")});
  this.refreshlist();
  this.loaddropdownlist();

  }
  ngOnChanges(changes:SimpleChanges):void{
   this.refreshlist();

  }
  refreshlist(){
    this.semservice.GetSemesterSubjects (this.semesterid).subscribe(data=>
      {this.subjects=<Subject[]>data
      console.log(data);}

      )
      console.log(this.subjects);
  }

  loaddropdownlist(){
    this.subservice.GetSubjects().subscribe(
      data=>{this.AllSubjectist=data;
    });}

  ondeleteclick(id:number){
this.semservice.DeleteSubjectTosemester(this.semesterid,id).subscribe(
  (data:any)=>{alert(data.value)},
   (error:any)=>{alert(error.error)}

)
console.log("iddd"+id+"//"+this.semesterid)

this.refreshlist();

  }

  onaddclick(){
    if(typeof( this.selctedsubject)==="number"){
    this.semservice.AddSubjectToSemester(Number(this.semesterid) ,Number(this.selctedsubject)).subscribe(
      (data:any)=>{alert(data.value)},
       (error:any)=>{alert(error.error)}
    
    )
     this.refreshlist();

  }
    else{
      alert("select subjct");
    }

  }

}
