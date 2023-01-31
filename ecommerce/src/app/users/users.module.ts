import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterLayoutComponent } from '../login-register-layout/login-register-layout.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { RouterOutlet } from "@angular/router";



@NgModule({
    declarations: [
        LoginUserComponent,
        RegisterUserComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        RouterOutlet,
    ]
})
export class UsersModule { }
