import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NewDemoApp';
  users:any;
  loginName:any;

  constructor(private userService:UsersService){}

  ngOnInit(){
    this.userService.getUsersList().subscribe((res)=>{
      console.log(res);
      this.users = res;
    })
  }
  viewProfile(){
    this.userService.getUserDetails(this.users.id);  }
  
}
