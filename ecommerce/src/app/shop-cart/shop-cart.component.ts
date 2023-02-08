import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';
import { ShopCartService } from './services/shop-cart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent {

  userCart:any = []
  totalValue: number = 0
  shipping: number = 10

  constructor(
    private auth: AuthenticationService,
    private cartService: ShopCartService, 
    private router: Router
    ){  }

  ngOnInit(){
    this.getCart()
  }

  getCart(){
    return this.cartService.getCart().subscribe((data) => {
      console.log(data)
      this.userCart = data
      this.totalValue = this.countCart()
    }, error => {
      console.log(error)
    }
    )
  }

  countCart(){
    let totalValue = 0
    for (let itens in this.userCart){
      totalValue += this.userCart[0].product.price
    }
    return totalValue
  }

  deleteProductCart(product_id:number){
    console.log(product_id)
     Swal.fire({
        title: 'Confirm delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'red',
        cancelButtonColor: 'LightGrey',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {

          this.cartService.delProductCart(product_id).subscribe((res) => {
            this.ngOnInit()
          })

          Swal.fire(
            'Deleted!',
            'The product has been deleted.',
            'success'
          )
        }
      })
  }
  
  finishCart(){
    Swal.fire({
      title: 'Confirm Purchase?',
      text: `The final price is $ ${this.totalValue} `,
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#04ba2c',
      cancelButtonColor: 'LightGrey',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
      for (let product of this.userCart){
        this.cartService.delProductCart(product.id).subscribe((res) => {
         console.log(res)
         this.ngOnInit()
        }, error => {
          console.log(error)
        }) 
      }
      this.router.navigate(['/'])
      Swal.fire(
        'Success!',
        'Thanks for buying in Piet.',
        'success'
      )
    }
    })
  }

  deleteAllProductsCart(){
    Swal.fire({
      title: 'Confirm delete?',
      text: "You gonna delete all products of this cart.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'LightGrey',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
    for (let product of this.userCart){
      this.cartService.delProductCart(product.id).subscribe((res) => {
       console.log(res)
       this.ngOnInit()
      }, error => {
        console.log(error)
      }) 
    }
    this.router.navigate(['/'])
    Swal.fire(
      'Deleted!',
      'The products has been deleted.',
      'success'
    )
  }
  })

}
  }



