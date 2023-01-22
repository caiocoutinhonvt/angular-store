import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  form: FormGroup;
  shoesName:string = '';
  price:string = ''
  image:string = ''

  fields = [this.shoesName, this.price, this.image]

  function(){
    if (this.form.value == ''){
      console.log('ok')
    } else {
      console.log('bye')
    }
  }
 
  

  constructor(private formBuilder:FormBuilder, private productService: ProductService,  private toastr: ToastrService, private router: Router) {
    this.form = this.formBuilder.group({
      name: [null],
      price: [null],
      image: '',
      category: [null],
      store: 1
    })
  }

  onSubmit(){
    console.log(this.form.value)
    this.productService.createProducts(this.form.value).subscribe((res) => {
      this.toastr.success('Produto cadastrado com sucesso')
      this.router.navigate(['/']);
      console.log(res)
    })
  }

}
