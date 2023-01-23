import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  createForm!: FormGroup;
  shoesName:string = '';
  price:string = ''
  image:string = ''
  

  constructor(private productService: ProductService,  private toastr: ToastrService, private router: Router) { }

  ngOnInit():void{
    this.createForm = new FormGroup({
      name:  new FormControl([null], [Validators.required]),
      price: new FormControl([null], [Validators.required]),
      image: new FormControl([null], [Validators.required]),
      category: new FormControl([null], [Validators.required]),
      store: new FormControl(1, [Validators.required]),
    })
  }

  onSubmit(){
    console.log(this.createForm.value)
    this.productService.createProducts(this.createForm.value).subscribe((res) => {
      this.toastr.success('Produto cadastrado com sucesso')
      this.router.navigate(['/']);
      console.log(res)
    })
  }

}
