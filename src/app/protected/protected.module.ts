import { DashboardModule } from './dashboard/dashboard.module';
import { SoldcarModule } from './../soldcar-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { FullComponent } from './layouts/full/full.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';


@NgModule({
  declarations: [
    FullComponent
  ],
  imports: [
    CommonModule,
    // Import our Routes for this module
    ProtectedRoutingModule,
    // Angular Material Imports
    MatButtonModule,
    // flexy template
    FeatherModule.pick(allIcons),
    SoldcarModule,
    DashboardModule

  ]
})
export class ProtectedModule { }
