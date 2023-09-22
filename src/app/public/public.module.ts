import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatLegacyCardModule as MatCardModule, MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [
    // Own components
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    // Import our Routes for this Module
    PublicRoutingModule,
    // Angular Forms Imports
    ReactiveFormsModule,
    FormsModule,
    // Angular Material Import
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class PublicModule { }
