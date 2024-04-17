import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  
];
