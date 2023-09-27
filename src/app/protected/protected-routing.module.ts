import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';

// Routes for child Module (protectedModule). Since protected module is lazy loaded in in the
// app-routing.module the full path is `/protected/dashboard`
// const routes: Routes = [
//   {
//     path: 'dashboard',
//     component: DashboardComponent
//   },
//   {
//     path: '**',
//     redirectTo: 'login',
//     pathMatch: 'full'
//   }
// ];

const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent}
    ]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
