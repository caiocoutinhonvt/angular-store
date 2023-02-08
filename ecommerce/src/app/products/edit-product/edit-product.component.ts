import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/store/services/store.service';
import Swal from 'sweetalert2';

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

  get formName(){return this.editProductForm.get('name')!}
  get formPrice(){return this.editProductForm.get('price')!}
  get formImage(){return this.editProductForm.get('image')!}
  get formCategory(){return this.editProductForm.get('category')!}
  get formStore(){return this.editProductForm.get('store')!}

  shoesName:string = this.editProductForm.value.name as string;
  price:any = this.editProductForm.value.price as number | null;
  image:string = this.editProductForm.value.image as string;
  storeList:any = []

  constructor(
    private storeService: StoreService,
    private productService: ProductService, 
    private toastr: ToastrService, 
    private activateRoute: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit():void{
    this.productService.getProductById(this.activateRoute.snapshot.params['id']).subscribe((result:any) => {
      this.editProductForm.setValue({
          name: result[0].name,
          price: result[0].price,
          image: result[0].image,
          category: result[0].category,
          store: result[0].store.id
      })
      
    this.getStore()
    })
  }

  editProduct(){
      this.productService.editProduct(this.activateRoute.snapshot.params['id'], this.editProductForm.value).subscribe((res)=>
      
      Swal.fire({
        icon: 'success',
        title: 'Product updated successfully',
        showConfirmButton: false,
        timer: 2000
      })
      )

      this.router.navigate(['/admin/shop'])
    
  }

  getStore(){
    this.storeService.getShop().subscribe((res) => {
      console.log(res)
      this.storeList = res
    }, error => {
      console.log(error)
    })
  }
}
