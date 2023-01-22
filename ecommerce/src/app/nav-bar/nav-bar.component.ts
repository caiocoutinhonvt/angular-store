import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  cartNumber: number = 4
  getCartNumber(): number {
    return this.cartNumber
  }
  
  
}
