import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './main-template/about/about.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginRegisterLayoutComponent } from './login-register-layout/login-register-layout.component';
;
import { CatalogueComponent } from './products/catalogue/catalogue.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { AuthGuard } from './account/shared/auth.guard';
import { CreateStoreComponent } from './store/create-store/create-store.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserCatalogueComponent } from './user-template/user-catalogue/user-catalogue.component';



const route: Routes = [
  {
    path:'',
    component: UserLayoutComponent,
    children: [
      {path: '', component: UserCatalogueComponent},
      {path: 'about', component: AboutComponent},
    ]
  },

  {
    path:'admin',
    component: LayoutComponent,
    children: [
      {path: 'create-product/new', component: CreateProductComponent, canActivate: [AuthGuard]},
      {path: 'create-shop/new', component: CreateStoreComponent, canActivate: [AuthGuard]},
      {path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard]},
      {path: 'shop', component: CatalogueComponent, canActivate:[AuthGuard]}
     
    ],
    canActivate: [AuthGuard]
  },


  {
    path: '',
    component: LoginRegisterLayoutComponent,
    children:[
      {path: 'login', component: LoginUserComponent},
      {path: 'register', component: RegisterUserComponent},
      {path: 'shop-cart', component: ShopCartComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
