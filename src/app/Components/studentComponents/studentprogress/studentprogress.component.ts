import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentProgressForsubjectModel, studentprogressmodel } from 'src/app/Interfaces/myinterfaces';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-studentprogress',
  templateUrl: './studentprogress.component.html',
  styleUrls: ['./studentprogress.component.css']
})
export class StudentprogressComponent implements OnInit {
list:StudentProgressForsubjectModel[]
  studentid: string;
  deg:number
  constructor(private stservice:StudentService,private route:ActivatedRoute) { 
  }


  ngOnInit(): void {

        
this.route.queryParamMap.subscribe(p2=> {
  this.studentid= p2.get("studentid");
  this.stservice.GetStudentprogressbygroupid(this.studentid).subscribe(


   data=> this.list= <StudentProgressForsubjectModel[]>data
  )



});

  }
  getdegree(item:studentprogressmodel){

    if (item.ans != null)
                {
                  return    ((item.ans.degree != null ? item.ans.degree : "Not Corrected yet"));


                }
                else
                {
                     return  "Not solved Yet";
                }
                     
                   }
  


}
