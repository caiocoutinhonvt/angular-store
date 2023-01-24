import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  constructor(
    public auth: AuthenticationService,
    private router: Router
  ){ }

  cartNumber: number = 4
  getCartNumber(): number {
    return this.cartNumber
  }

  logout(){
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure? After logging out you still able to access Shop and About Piet',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'LightGrey',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'You have been logged out',
          icon: 'success'
        }
        )
        this.auth.logout()
        this.router.navigate(['/login'])
      }
    })
  }
  
  
}
