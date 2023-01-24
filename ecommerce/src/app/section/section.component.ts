import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  products:any = []
 
  constructor(
    private productService: ProductService,
    public auth: AuthenticationService
  ) {  }

  ngOnInit(){
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data
      },
      (error) => {
        console.log(error)
      }
    )
  }

  delProduct(product_id:any){
      Swal.fire({
        title: 'Confirm delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
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
  totalProducts(){
    return this.products.length
  }
 
}
