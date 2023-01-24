import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  form: FormGroup;
  
  constructor(private formBuilder:FormBuilder, private authentication: AuthenticationService, private toastr: ToastrService, private router: Router) {
    this.form = this.formBuilder.group({
      email: [null],
      password: [null],
    })
  }

  onSubmit(){
    this.authentication.login(this.form.value)
}
}