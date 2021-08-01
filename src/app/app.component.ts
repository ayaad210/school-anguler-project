import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AccountService } from './Services/account-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SchoolAngular';
  /**
   *
   */
  constructor(private acc:AccountService) {
      
  }
  ngOnInit(): void {
    //this.acc.login({email:"ayaad220@yahoo.com",password:"As123456+",rememberMe:false});
       

  localStorage.setItem('mainurl','http://localhost:57639');
console.log("main url")

   }



}

