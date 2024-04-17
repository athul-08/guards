import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterModule,FormsModule,CommonModule,DashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router:Router){}
mail: any;
password: any;

  loginauthenticate(mail:string,password:string){
    if(mail==="user@gmail.com" && password==="password")
      {
        localStorage.setItem("user","user@gmail.com");
        localStorage.setItem("password","password");
        this.router.navigateByUrl("/dashboard")
       }else{
        alert("Invalid email or password")
      }
  }
 
}