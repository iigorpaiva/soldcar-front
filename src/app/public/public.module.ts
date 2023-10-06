import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [
    // Own components
    LoginComponent
  ],
  imports: [
    CommonModule,
    // Import our Routes for this Module
    PublicRoutingModule,
    // Angular Forms Imports
    ReactiveFormsModule,
    FormsModule,
    // Angular Material Import
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class PublicModule { }
