import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule,RouterLink,FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  role: any;
  constructor(private router:Router){}
  profileauthenticate(role:string){
  if(role === "user")
    {
      localStorage.setItem("role","user");
      this.router.navigateByUrl("/settings");
    }
    else{
      alert("something went wrong")
    }
  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")
  }
  
  }