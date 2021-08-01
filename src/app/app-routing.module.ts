import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { AnswerAddEditComponent } from './Components/answerComponents/answer-add-edit/answer-add-edit.component';
import { AnswerlistComponent } from './Components/answerComponents/answerlist/answerlist.component';
import { GroupListComponent } from './Components/Groupcomponents/group-list/group-list.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ParentStudentsComponent } from './Components/parentComponents/parent-students/parent-students.component';
import { ParntAddEditComponent } from './Components/parentComponents/parnt-add-edit/parnt-add-edit.component';
import { ParntListComponent } from './Components/parentComponents/parnt-list/parnt-list.component';
import { SemesterListComponent } from './Components/semesterComponents/semester-list/semester-list.component';
import { StudentAddEditComponent } from './Components/studentComponents/student-add-edit/student-add-edit.component';
import { StudentListComponent } from './Components/studentComponents/student-list/student-list.component';
import { StudentprogressComponent } from './Components/studentComponents/studentprogress/studentprogress.component';
import { SubjectAddEditComponent } from './Components/subjectComponents/subject-add-edit/subject-add-edit.component';
import { SubjectListComponent } from './Components/subjectComponents/subject-list/subject-list.component';
import { TaskAddEditComponent } from './Components/TaskComponents/task-add-edit/task-add-edit.component';
import { TasklistComponent } from './Components/TaskComponents/tasklist/tasklist.component';
import { TeacherAddEditComponent } from './components/teacherComponents/teacher-add-edit/teacher-add-edit.component';
import { TeacherlistComponent } from './components/teacherComponents/teacherlist/teacherlist.component';
import { GaurdGuard } from './guards/gaurd.guard';


const routes: Routes = [
  {path:"admin",component:AdminComponent,canActivate:[GaurdGuard]},

  {path:"login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"semesterslist",component:SemesterListComponent,canActivate:[GaurdGuard]}
  ,{path:"subjectlist",component:SubjectListComponent,canActivate:[GaurdGuard]},
  {
    path:"grouplist",component:GroupListComponent ,canActivate:[GaurdGuard]
  },
  {path:"Teacherlist",component:TeacherlistComponent,canActivate:[GaurdGuard]},
  {path:"Teacheraddedit",component:TeacherAddEditComponent},
  {path:"Studentaddedit",component:StudentAddEditComponent},
  {path:"StudentList",component:StudentListComponent,canActivate:[GaurdGuard]},
  {path:"parentlist",component:ParntListComponent,canActivate:[GaurdGuard]},
  {path:"parentAddedit",component:ParntAddEditComponent},
  {path:"answerslist",component:AnswerlistComponent,canActivate:[GaurdGuard]},
  {path:"answeaddedit",component:AnswerAddEditComponent,canActivate:[GaurdGuard]},
  {path:"taskslist",component:TasklistComponent,canActivate:[GaurdGuard]}
  ,  {path:"parentstudents",component:ParentStudentsComponent,canActivate:[GaurdGuard]}
  ,  {path:"studentprogress",component:StudentprogressComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
