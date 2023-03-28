import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://api.github.com/users'

  constructor( private http: HttpClient) { }

  getUsersList(){
    return this.http.get('https://api.github.com/users')
  }

  getUserDetails(userName:string){
    return this.http.get(`${this.apiUrl}/${userName}`);
  }
}
