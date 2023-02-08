import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductService } from 'src/app/services/product.service';
import { ShopCartService } from 'src/app/shop-cart/services/shop-cart.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  products:any = []
  successBuy = false
 
  constructor(
    private productService: ProductService,
    public auth: AuthenticationService,
    private cartService: ShopCartService,
    private toastr: ToastrService
  ) {  }

  ngOnInit(){
    this.productService.getProducts().subscribe((data) => {
        this.products = data
      },(error) => {
        console.log(error)
      }
    )
  }

  delProduct(product_id:number){
      Swal.fire({
        title: 'Confirm delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'red',
        cancelButtonColor: 'LightGrey',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.productService.deleteProducts(product_id).subscribe((res) => {
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

  addToCart(product:number){
    console.log(product)
    this.cartService.createCart(product).subscribe((res) => {
      console.log(res)
      this.toastr.success('Successfuly add to cart')
    }, error => {
      console.log(error)
    }  
    )

  }

  totalProducts(){
    return this.products.length
  }
 
}
