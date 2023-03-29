import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://api.github.com/users'

  constructor( private http: HttpClient) { }

  getUsersList(){
    return this.http.get('https://api.github.com/users')
  }

  getUserDetails(name:string){
    return this.http.get('https://api.github.com/users/name');
  }
}
