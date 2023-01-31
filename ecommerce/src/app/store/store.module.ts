import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStoreComponent } from './create-store/create-store.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CreateStoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class StoreModule { }
