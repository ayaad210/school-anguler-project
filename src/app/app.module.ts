import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule,HTTP_INTERCEPTORS} from  "@angular/common/http";
import { JwtModule } from "@auth0/angular-jwt";
import { JwtInterceptor } from './interceptors/JwtInterceptor';
import { NavBarComComponent } from './Components/nav-bar-com/nav-bar-com.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminComponent } from './Components/admin/admin.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SemesterListComponent } from './Components/semesterComponents/semester-list/semester-list.component';
import { SemesterAddEditComponent } from './Components/semesterComponents/semester-add-edit/semester-add-edit.component';
import { SubjectListComponent } from './Components/subjectComponents/subject-list/subject-list.component';
import { SubjectAddEditComponent } from './Components/subjectComponents/subject-add-edit/subject-add-edit.component';
import { GroupListComponent } from './Components/Groupcomponents/group-list/group-list.component';
import { GroupAddEditComponent } from './Components/Groupcomponents/group-add-edit/group-add-edit.component';
import { SubjectsOfSemesterComponent } from './Components/semesterComponents/subjects-of-semester/subjects-of-semester.component';
import { TeacherlistComponent } from './components/teacherComponents/teacherlist/teacherlist.component';
import { TeacherAddEditComponent } from './components/teacherComponents/teacher-add-edit/teacher-add-edit.component';
import { StudentListComponent } from './Components/studentComponents/student-list/student-list.component';
import { StudentAddEditComponent } from './Components/studentComponents/student-add-edit/student-add-edit.component';
import { ParntListComponent } from './Components/parentComponents/parnt-list/parnt-list.component';
import { ParntAddEditComponent } from './Components/parentComponents/parnt-add-edit/parnt-add-edit.component';
import { ParentStudentsComponent } from './Components/parentComponents/parent-students/parent-students.component';
import { TasklistComponent } from './Components/TaskComponents/tasklist/tasklist.component';
import { TaskAddEditComponent } from './Components/TaskComponents/task-add-edit/task-add-edit.component';
import { AnswerlistComponent } from './Components/answerComponents/answerlist/answerlist.component';
import { AnswerAddEditComponent } from './Components/answerComponents/answer-add-edit/answer-add-edit.component';
import { GaurdGuard } from './guards/gaurd.guard';
import { StudentprogressComponent } from './Components/studentComponents/studentprogress/studentprogress.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialAuthService } from "angularx-social-login";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    SemesterListComponent,
    SemesterAddEditComponent,
    
    SubjectListComponent,
    SubjectAddEditComponent,
    GroupListComponent,
    GroupAddEditComponent,
    SubjectsOfSemesterComponent,
    TeacherlistComponent,
    TeacherAddEditComponent,
    StudentListComponent,
    StudentAddEditComponent,
    ParntListComponent,
    ParntAddEditComponent,
    ParentStudentsComponent,
    TasklistComponent,
    TaskAddEditComponent,
    AnswerlistComponent,
    AnswerAddEditComponent,
    StudentprogressComponent
    
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => localStorage.getItem('jwt')
      }
    }),
      

  ],
  providers: [   
    GaurdGuard,SocialAuthService,
 {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
             '770747935611-v8ldn3cantvd8a56ahqmsb14nv0j30ri.apps.googleusercontent.com'
            )
          },
        ],
      } as SocialAuthServiceConfig
    }
    
    //هحط كلاس تتعامل مع الركويست بدل الانتسبتور اللى هنا
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
