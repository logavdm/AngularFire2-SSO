import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

user: Observable<firebase.User>;

  constructor(public firebaseAuth: AngularFireAuth) {
  this.user=this.firebaseAuth.authState;
   }

  GoogleLogin(){
  	return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  GoogleSignOut(){
  	this.firebaseAuth.auth.signOut().then(data=>{
  		console.log("signout success");
  	});
  }

}
