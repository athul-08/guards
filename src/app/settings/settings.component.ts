import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(private router:Router){}
  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")
  }
  
}
