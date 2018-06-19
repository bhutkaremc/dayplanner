import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }


loginUser()
{
  if(this.email=="abhi@gmail.com" && this.password=="123456" || this.email=="ravi@gmail.com" && this.password=="123456"
|| this.email=="raju@gmail.com" && this.password=="123456" || this.email=="john@gmail.com" && this.password=="123456" ||
this.email=="hello@gmail.com" && this.password=="123456")
  {
    this.router.navigate(['dashboard'])
  }
  else{
    console.log("Invalid username and password");
  }
}


}
