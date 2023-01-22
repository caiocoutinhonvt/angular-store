import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  form: FormGroup;
  create = false

  constructor(private formBuilder:FormBuilder, private userService: UserService, private toastr: ToastrService, private router: Router) {
    this.form = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
    })
  }

  onSubmit(){
    console.log(this.form.value)
    this.userService.registerUser(this.form.value).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/login']);
    
      this.toastr.success('Usuário criado com sucesso')
    }, error => {
      console.log(error)
    })
  }
}

