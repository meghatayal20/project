import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {User} from './user';
import {Router} from '@angular/router';

@Injectable()
export class LoginService{

    private userurl = 'assets/user.json';

    constructor(private http :Http,private router:Router){}

    getUserLogin():Observable<User[]>{
        return this.http.get(this.userurl)
        .map((response : Response) =><User[]> response.json())
        .do(data =>console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error : Response){
        console.log(error);
        return Observable.throw(error.json().error());
    }

     loginCredentials(userlog : User, userLogin:User[]){
       var authenticatedUser = userLogin.find(user => user.email === userlog.email)
        if(authenticatedUser && authenticatedUser.password === userlog.password)
          {
              localStorage.setItem("user" , JSON.stringify(userlog.email));
              this.router.navigate(['comment']);
               return true;
          }

          return false;
     }

}