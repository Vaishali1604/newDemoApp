import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice: UsersService,
    private route: ActivatedRoute) { }
  user: any;
  avatar:any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];   
      this.userservice.getUserDetails(username).subscribe((details)=>{
        this.user = details;
        console.log(this.user);        
      })
    });
  }

}


