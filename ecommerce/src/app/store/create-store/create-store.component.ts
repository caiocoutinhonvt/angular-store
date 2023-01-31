import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent {

  storeList:any = []
  constructor(private storeService: StoreService, private formBuilder: FormBuilder ) {}

  ngOnInit():void{
    this.storeForm
    this.getStore()
    
  }

  storeForm = this.formBuilder.group({
    name:  ['', [Validators.required]],
    website: ['', [Validators.required]],
  })

  onSubmit(){
    console.log(this.storeForm.value)
    this.storeService.createShop(this.storeForm.value).subscribe((res) => {
      this.ngOnInit()
      console.log('ok')
      console.log(res)
    }, error => {
      console.log('fail')
    })
  }

  getStore(){
    this.storeService.getShop().subscribe((res) => {
      console.log(res)
      this.storeList = res
      console.log(this.storeList)
    }, error => {
      console.log(error)
    })
  }

  delStore(id:number){
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

        this.storeService.deleteShop(id).subscribe((res) => {
          this.ngOnInit()
        })

        Swal.fire(
          'Deleted!',
          'The store has been deleted.',
          'success'
        )
      }
    })

  }
}

