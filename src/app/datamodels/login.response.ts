export class LoginResponse {
    errorCode:String;
    errorMsg:String;
    response:any;

    constructor(){
    	this.errorCode="";
    	this.errorMsg="";
    	this.response="";
    }
}