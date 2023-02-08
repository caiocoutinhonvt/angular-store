import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URL = "http://localhost:3500"

  constructor(private http: HttpClient) { }

  public registerUser(user:any){
    return this.http.post(`${environment.SERVER_URL}/user/new`, user)
  }

}

