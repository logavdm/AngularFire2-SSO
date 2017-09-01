import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
	ProfilePhoto : String;
	email:String;
	name;
  constructor(private AuthService:AuthService,private router : Router) { 

  	this.AuthService.user.subscribe(data=>{
  		if(data && data.uid!=null){
  		this.ProfilePhoto=data.photoURL;
  		this.email=data.email;
  		this.name=data.displayName.split(" ");
  		}else{
  			this.router.navigateByUrl("/login");
  		}

  	});

  
  }

  ngOnInit() {
  }

  signout(){
  	this.AuthService.SignOut().then(data=>{
  		this.router.navigateByUrl("/login");
  	});
  }

}
