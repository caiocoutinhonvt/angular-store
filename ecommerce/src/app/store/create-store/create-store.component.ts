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

  form = true
  storeList:any = []
  editMode = false
  constructor(private storeService: StoreService, private formBuilder: FormBuilder ) {}
  storeForm!: FormGroup

  ngOnInit():void{
    
    this.getStore()

    this.storeForm = this.formBuilder.group({
      id: [[null], [Validators.required]],
      name:  ['', [Validators.required]],
      website: ['', [Validators.required]],
    })
    
  }

 

  createStore(){
    this.storeService.createShop(this.storeForm.value).subscribe((res) => {
      console.log(res)
    }, error => {
      console.log(error)
    })
  }

  getStore(){
    this.storeService.getShop().subscribe((res) => {
      this.storeList = res
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
      confirmButtonColor: 'red',
      cancelButtonColor: 'LightGrey',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.storeService.deleteShop(id).subscribe((res) => {
          this.ngOnInit()
          // Swal.fire(
          //   'Deleted!',
          //   'The store has been deleted.',
          //   'success'
          // )
        }, error => {
          console.log(error)
          Swal.fire(
            'Failed!',
            'This store cannot be deleted because it contains products.',
            'success'
          )
        })

      
      }
    })
  }

  getStoreById(id:number){
    this.storeService.getStoreById(id).subscribe((data:any) => {
      console.log(data)

    this.storeForm.setValue({
        id: data[0].id,
        name:  data[0].name,
        website: data[0].website,
    })

    this.editMode = true

    return id
    })
  }

  editStore(){
    this.storeService.editStore(this.storeForm.value.id,this.storeForm.value).subscribe((res) => {
      console.log(res)
    }, error => {
      console.log(error)
    })
  }


}

