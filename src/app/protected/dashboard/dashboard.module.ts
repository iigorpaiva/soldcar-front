import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SoldcarModule } from './../../soldcar-module';
import { ActivityComponent } from './dashboard-components/activity/activity.component';
import { CardsComponent } from './dashboard-components/cards/cards.component';
import { PatiosComponent } from './dashboard-components/patios/patios.component';
import { ProductComponent } from './dashboard-components/product/product.component';
import { RegisterComponent } from './dashboard-components/product/register/register.component';
import { SalesComponent } from './dashboard-components/sales/sales.component';
import { DashboardComponent } from './dashboard.component';
import { VendasComponent } from './dashboard-components/vendas/vendas.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SalesComponent,
    ActivityComponent,
    ProductComponent,
    CardsComponent,
    RegisterComponent,
    PatiosComponent,
    VendasComponent

  ],
  imports: [
    CommonModule,
    SoldcarModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    SalesComponent,
    ActivityComponent,
    ProductComponent,
    PatiosComponent
  ]
})
export class DashboardModule { }
