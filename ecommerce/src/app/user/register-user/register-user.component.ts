import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  create = false

  registerForm!: FormGroup

  constructor( private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit():void{
    this.registerForm = new FormGroup({
      name: new FormControl([null], [Validators.required]),
      email: new FormControl([null], [Validators.required, Validators.email]),
      password: new FormControl([null], [Validators.required, Validators.minLength(5)]),
    })
  }

  get name(){return this.registerForm.get('name')!}

  get email(){return this.registerForm.get('email')!}

  get password(){return this.registerForm.get('password')!}


  onSubmit(){
    console.log(this.registerForm.get('name'))
    this.userService.registerUser(this.registerForm.value).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/login']);
    
      this.toastr.success('Usuário criado com sucesso')
    }, error => {
      console.log(error)
    })
  }
}

