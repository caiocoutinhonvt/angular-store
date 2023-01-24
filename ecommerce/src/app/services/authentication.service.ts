import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import jwt_decode from "jwt-decode";
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  public login(user:any){
    console.info(user)
    return this.http.post("/api/login", user).subscribe((res:any) => {

      console.info(res.token)
      let token = res.token
      localStorage.setItem("token", token)

      Swal.fire({
        icon: 'success',
        title: 'Login successfully',
        showConfirmButton: false,
        timer: 2500
      })

      this.router.navigate(['/'])
    },
    error =>{
      console.log('error ao fazer login')
    }
    )

  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token')
    return token
  }

  getTokenExpirationDate(token:string) {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?:string): boolean{
    if(!token){
      return true
    }

    const date = this.getTokenExpirationDate(token)
    if (date === undefined){
      false
    }

    return !(date!.valueOf() > new Date().valueOf());
  } 

  isUserLoggedIn(){
    const token = this.getAuthorizationToken()

    if(!token){
      return false
    } else if (this.isTokenExpired(token)){
      return false
    }

    return true
  }

  logout(){
    localStorage.removeItem('token')
  }
}
