import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ShopCartService } from 'src/app/shop-cart/services/shop-cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  
  constructor(
    public auth: AuthenticationService,
    private router: Router,
    private cartService: ShopCartService
  ){ }

  userCart:any = []
  cartNumber:number = 0

  async ngOnInit(): Promise<void> {
  }

  logout(){
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure?',
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
