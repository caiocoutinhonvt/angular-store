import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginForm!: FormGroup
  
  constructor(private formBuilder:FormBuilder, 
    private authentication: AuthenticationService, 
    private toastr: ToastrService, 
    private router: Router) 
    
    {
    this.loginForm = new FormGroup({
      email: new FormControl([null], [Validators.required, Validators.email]),
      password: new FormControl([null], [Validators.required, Validators.minLength(5)]),
    })
  }

  get email(){return this.loginForm.get('email')!}

  get password(){return this.loginForm.get('password')!}

  

  onSubmit(){
    this.authentication.login(this.loginForm.value)
}
}