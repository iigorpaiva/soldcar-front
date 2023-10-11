import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard/auth.guard';
import { CarrosComponent } from './dashboard/dashboard-components/patios/carros/carros.component';
import { PatiosComponent } from './dashboard/dashboard-components/patios/patios.component';
import { UsuariosComponent } from './dashboard/dashboard-components/usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';

// Routes for child Module (protectedModule). Since protected module is lazy loaded in in the
// app-routing.module the full path is `/protected/dashboard`
const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    canActivate: [AuthGuard],
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"usuarios", component:UsuariosComponent},
      {path: "patios", component:PatiosComponent, children: [ {path: "carros", component: CarrosComponent }]}
    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
