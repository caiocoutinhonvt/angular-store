import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  products:any = []
 

  constructor(
    private productService: ProductService
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

  delProduct(product:any){
    console.log(product)
    this.productService.deleteProducts(product).subscribe((res) => {
      
    })
  }
  totalProducts(){
    return this.products.length
  }
 
}
