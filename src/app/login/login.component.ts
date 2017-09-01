import { Component, OnInit,NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';
import {LoginResponse} from '../datamodels/login.response'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	errorMsg:String;
	

  constructor(private AuthService:AuthService,private router : Router,private zone:NgZone){

 
  	
  	this.AuthService.user.subscribe(data=>{
  		if(data && data.uid!=null){
  			console.log("User Already Logged in");
  			this.router.navigateByUrl("/members");

  		}else{
  			console.log("User not logged in");
  		}
  	});

  }

  ngOnInit() {
  }

  loginWithGoogle(){
  		this.AuthService.GoogleLogin().then(data=>{
  		},(error)=>{
  			this.zone.run(()=>{
  				this.errorMsg=error.message;
  			});

  		});
  }

  loginWithFaceBook(){

  	this.AuthService.FaceBookLogin().then((data)=>{
  			
  	},(error)=>{
  		this.zone.run(()=>{
  			this.errorMsg=error.message;	
  		})
  		
  	});

  	
  }

  loginWithGithub(){
  	this.AuthService.GithubLogin().then((data)=>{

  	},(error)=>{
  		this.zone.run(()=>{
  			this.errorMsg=error.message;
  		});
  	});
  }



}
