import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegisterVModel } from 'src/app/Interfaces/myinterfaces';
import { AccountService } from 'src/app/Services/account-service.service';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private admin:AdminService,private router:Router) { }
adminmodel:AdminRegisterVModel={name:"",age:0,password:'',email:""};
  ngOnInit(): void {
  }
  Registersubmit()
   {
     this.admin.RegisterAdminAdmin(this.adminmodel).subscribe(
    
      (data: any) => alert(data.value),
      (error: any) => alert(error.error),
      () =>  {this.router.navigateByUrl("")})
      


      
     


    }
}
