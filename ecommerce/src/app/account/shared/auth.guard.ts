import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authentication: AuthenticationService){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const logged: boolean = this.authentication.isUserLoggedIn()

    if (logged) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
