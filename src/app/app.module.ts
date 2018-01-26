import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommentComponent } from './comment/comment.component';
import {RouterModule , Routes} from '@angular/router';
const appRoute:Routes=[
  {path : 'login' , component:LoginComponent},
  {path : 'comment' ,component : CommentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
