import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import jwt_decode from "jwt-decode";
import { Token } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  SERVER_URL = "http://localhost:3500"

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  public login(user:any){
    console.info(user)
    return this.http.post(`${environment.SERVER_URL}/login`, user).subscribe((res:any) => {

      let userId = res.user.id
      let token = res.token
      localStorage.setItem("token", token)
      localStorage.setItem("userId", userId)

      Swal.fire({
        icon: 'success',
        title: 'Login successfully',
        showConfirmButton: false,
        timer: 2500
      })

      this.router.navigate(['/'])
    },
    error => {
        this.toastr.error(error)
        console.log('error ao fazer login')
    }
    )

  }

  getAuthorizationToken():string | null{
    const token = localStorage.getItem('token')
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

  isUserLoggedIn():boolean{
    const token = this.getAuthorizationToken()

    if(!token){
      return false
    } else if (this.isTokenExpired(token)){
      return false
    }

    return true
  }

  getUserId(){
    return Number(localStorage.getItem('userId'))
   
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
  }
}
