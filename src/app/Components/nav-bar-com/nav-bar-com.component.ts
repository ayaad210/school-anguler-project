import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/Services/account-service.service';

@Component({
  selector: 'app-nav-bar-com',
  templateUrl: './nav-bar-com.component.html',
  styleUrls: ['./nav-bar-com.component.css']
})
export class NavBarComComponent implements OnInit {

  constructor(private acc:AccountService) { }
  LoginStatus$ : Observable<boolean>;
  role:string;

  ngOnInit(): void {
    this.LoginStatus$ = this.acc.isLoggesIn;
    this.role=localStorage.getItem("userrole")
console.log("roooole") ;

this.acc.currentUserRole.subscribe(data=>this.role=data)

    console.log(this.role)


    
  }
  

  logout() {
this.acc.logout();

}

}

