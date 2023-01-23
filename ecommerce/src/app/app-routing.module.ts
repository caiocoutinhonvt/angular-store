import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about/about.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginRegisterLayoutComponent } from './user/login-register-layout/login-register-layout.component';
;
import { SectionComponent } from './section/section.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const route: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children: [
      {path: '', component: SectionComponent},
      {path: 'about', component: AboutComponent},
      {path: 'create/new', component: CreateProductComponent},
      {path: 'edit-product/:id', component: EditProductComponent}
      
    ]
  },
  {
    path: '',
    component: LoginRegisterLayoutComponent,
    children:[
      {path: 'login', component: LoginUserComponent},
      {path: 'register', component: RegisterUserComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
