import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  

  editProductForm = new FormGroup({
    name:  new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    image: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    store: new FormControl(0),
  })
  

  constructor(private productService: ProductService,  private toastr: ToastrService, private router: ActivatedRoute) { }


  shoesName:string = this.editProductForm.value.name as string;
  price:any = this.editProductForm.value.price as number | null;
  image:string = this.editProductForm.value.image as string;


  ngOnInit():void{
    

    this.productService.getProductById(this.router.snapshot.params['id']).subscribe((result:any) => {
      console.log(result[0])
      this.editProductForm.setValue({
          name: result[0].name,
          price: result[0].price,
          image: result[0].image,
          category: result[0].category,
          store: 1
      })  

    })

    
  }


  editProduct(){
    console.log(this.editProductForm.value)

    this.productService.editProduct(this.router.snapshot.params['id'], this.editProductForm.value).subscribe((res)=>
      console.log(res)
    )

    
  }
}
