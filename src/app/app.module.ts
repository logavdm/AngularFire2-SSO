import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase-config';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import {appRoutes} from './routes/routes'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MembersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
