import { NgApexchartsModule } from 'ng-apexcharts';
import { SoldcarModule } from './../../soldcar-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SalesComponent } from './dashboard-components/sales/sales.component';
import { ActivityComponent } from './dashboard-components/activity/activity.component';
import { ProductComponent } from './dashboard-components/product/product.component';
import { CardsComponent } from './dashboard-components/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    SalesComponent,
    ActivityComponent,
    ProductComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    SoldcarModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    SalesComponent,
    ActivityComponent,
    ProductComponent,
  ]
})
export class DashboardModule { }
