import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';


const approutes: Routes = [
  { path: '', component: HomeComponent,
        children: [
           {path: 'dashboard', component: DashboardComponent},
       ]
   },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(approutes),
    SharedModule
  ],
  declarations: [HomeComponent, DashboardComponent]
})
export class HomeModule { }
