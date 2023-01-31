import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-template/header/header.component';
import { NavBarComponent } from './main-template/nav-bar/nav-bar.component';
import { FooterComponent } from './main-template/footer/footer.component';
import { AboutComponent } from './main-template/about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { httpInterceptorProviders } from './http-interceptors';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { LoginRegisterLayoutComponent } from './login-register-layout/login-register-layout.component';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    AboutComponent,
    LayoutComponent,
    LoginRegisterLayoutComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    ProductsModule,
    StoreModule  
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
