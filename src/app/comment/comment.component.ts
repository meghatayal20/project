import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/loginservice';
import {Router} from '@angular/router';
import {User} from '../login/user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers:[LoginService]
})
export class CommentComponent implements OnInit {

  email = ""; 

  constructor(private router :Router) { }

  ngOnInit() {
   //this.authservice.loginCredentials();
   this.email = localStorage.getItem('user');
  }

  addComment(comment :HTMLInputElement):boolean{
      console.log(comment);
      console.log(this.email);
      return false;  

  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
