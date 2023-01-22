import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  form: FormGroup;
  
  constructor(private formBuilder:FormBuilder, private UserService: UserService, private toastr: ToastrService, private router: Router) {
    this.form = this.formBuilder.group({
      email: [null],
      password: [null],
    })
  }

  onSubmit(){
    console.log(this.form.value)
    this.UserService.loginUser(this.form.value).subscribe((res) => {
      console.log(res)

      this.toastr.success('Login efetuado com sucesso')
      this.router.navigate(['/']);
    },
    error => {
      console.log(error)
      this.toastr.error('Erro ao logar')
    })
  }


}