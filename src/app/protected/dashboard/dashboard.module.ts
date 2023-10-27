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
import { AtividadesComponent } from './dashboard-components/atividades/atividades.component';
import { CarrosComponent } from './dashboard-components/patios/carros/carros.component';
import { PatiosComponent } from './dashboard-components/patios/patios.component';
import { CadastroComponent } from './dashboard-components/usuarios/cadastro-dialog/cadastro-dialog.component';
import { DelecaoDialogComponent } from './dashboard-components/usuarios/delecao-dialog/delecao-dialog.component';
import { EdicaoUsuarioDialogComponent } from './dashboard-components/usuarios/edicao-usuario-dialog/edicao-usuario-dialog.component';
import { UsuariosComponent } from './dashboard-components/usuarios/usuarios.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AtividadesComponent,
    UsuariosComponent,
    CadastroComponent,
    DelecaoDialogComponent,
    PatiosComponent,
    CarrosComponent,
    EdicaoUsuarioDialogComponent

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
    AtividadesComponent,
    UsuariosComponent,
    PatiosComponent
  ]
})
export class DashboardModule { }
