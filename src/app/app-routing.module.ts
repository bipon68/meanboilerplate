import { NotfoundComponent } from './notfound/notfound.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ErrorComponent } from './error/error.component';
import { FormNotificationsComponent } from './form-notifications/form-notifications.component';
import { FormSamplesComponent } from './form-samples/form-samples.component';
import { FormCustomComponent } from './form-custom/form-custom.component';
import { LoginComponent } from './login/login.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { FormComponent } from './form/form.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiCardsComponent } from './ui-cards/ui-cards.component';

const routes: Routes = [
  // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  
  {path: 'bootstrap', component:BootstrapComponent},
  {path: 'ui-cards', component:UiCardsComponent},
  {path: 'widgets', component:WidgetsComponent},
  {path: 'charts', component:ChartsComponent},
  {path: 'forms', component: FormComponent},
  {path: 'form-custom', component: FormCustomComponent},
  {path: 'form-samples', component: FormSamplesComponent},
  {path: 'form-notifications', component: FormNotificationsComponent},
  {path: 'basic-table', component: BasicTableComponent},
  {path: 'data-table', component: DataTableComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'notfound', component: NotfoundComponent},
  {
    path: 'home',
    loadChildren: () => import('./_modules/home/home.module').then(m => m.HomeModule)
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: LoginComponent},  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
