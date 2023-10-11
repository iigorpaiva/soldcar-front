import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { SoldcarModule } from './../soldcar-module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FullComponent } from './layouts/full/full.component';
import { ProtectedRoutingModule } from './protected-routing.module';


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
    DashboardModule,
    MatPaginatorModule
  ]
})
export class ProtectedModule { }
