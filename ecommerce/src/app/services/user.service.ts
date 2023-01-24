import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URL = "http://localhost:3500"

  constructor(private http: HttpClient) { }

  public registerUser(user:any){
    return this.http.post("api/user/new", user)
  }

}

