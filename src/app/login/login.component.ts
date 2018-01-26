import { Component , OnInit} from '@angular/core';
import {LoginService} from './loginservice';
import {User} from './user';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  user:User[];
  errorMsg = "";

  constructor(private authservice : LoginService ) { }
 
   ngOnInit():void{
      this.authservice.getUserLogin()
       .subscribe(iuser =>{
          this.user = iuser;
       });
   }

  LoginSub(user){
    console.log(user.email);
    console.log(user.password);
    if(!this.authservice.loginCredentials(user , this.user)){
     this.errorMsg = "Email or password is incorrect ";
    }
  }
}
