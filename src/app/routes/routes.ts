import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MembersComponent } from '../members/members.component';
import { HomeComponent } from '../home/home.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent,
  children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'overview', component: HomeComponent }]
   },
  { path: 'signup',component: RegisterComponent },
  { path: 'members',component: MembersComponent },
  { path: '**', component: LoginComponent }
];