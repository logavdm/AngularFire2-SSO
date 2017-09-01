import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {LoginResponse} from  '../datamodels/login.response';



@Injectable()
export class AuthService {

 	user: Observable<firebase.User>;
	
 	
  constructor(public firebaseAuth: AngularFireAuth) {
  	this.user=this.firebaseAuth.authState;
   }

  GoogleLogin(){
	
	return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  FaceBookLogin(){
  	return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()); 
  }

  GithubLogin(){
  	return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  SignOut(){
  	return this.firebaseAuth.auth.signOut();
  }





}


