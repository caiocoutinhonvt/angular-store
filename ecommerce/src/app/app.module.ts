import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginRegisterLayoutComponent } from './user/login-register-layout/login-register-layout.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    SectionComponent,
    FooterComponent,
    AboutComponent,
    LayoutComponent,
    CreateProductComponent,
    LoginRegisterLayoutComponent,
    LoginUserComponent,
    RegisterUserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
