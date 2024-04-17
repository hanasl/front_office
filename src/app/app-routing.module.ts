import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashbordComponent } from './components/dash/dashbord/dashbord.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdministrateurComponent } from './secure/administrateur/administrateur.component';
import { HomeComponent } from './components/dash/home/home.component';
import { ChangePasswordRequestComponent } from './auth/change-password-request/change-password-request.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { ProduitsComponent } from './secure/produits/produits.component';
import { StoresComponent } from './secure/stores/stores.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashbord', component: DashbordComponent,
  children:[
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdministrateurComponent },
    { path: 'product', component: ProduitsComponent },
    { path: 'store', component: StoresComponent },
  ]},
  {path: 'register', component: RegisterComponent},
  { path: 'reset-password', component: ChangePasswordRequestComponent },
  { path: 'change-password', component: ChangePasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
