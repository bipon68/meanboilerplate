import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { BillingComponent } from './billing/billing.component';

const routes: Routes = [
  {path: 'profile', component:ProfileComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'billing', component: BillingComponent},
  {
    path: 'home',
    loadChildren: () => import('./_modules/home/home.module').then(m => m.HomeModule)
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
