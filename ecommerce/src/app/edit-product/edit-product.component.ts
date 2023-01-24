import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
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
    store: new FormControl(0, [Validators.required]),
  })
  

  constructor(private productService: ProductService,  private toastr: ToastrService, private activateRouter: ActivatedRoute, private router: Router) { }


  shoesName:string = this.editProductForm.value.name as string;
  price:any = this.editProductForm.value.price as number | null;
  image:string = this.editProductForm.value.image as string;


  ngOnInit():void{
    

    this.productService.getProductById(this.activateRouter.snapshot.params['id']).subscribe((result:any) => {
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

    this.productService.editProduct(this.activateRouter.snapshot.params['id'], this.editProductForm.value).subscribe((res)=>

    Swal.fire({
      icon: 'success',
      title: 'Product updated successfully',
      showConfirmButton: false,
      timer: 2000
    })
    )
   
    this.router.navigate(['/'])
    
  }
}
