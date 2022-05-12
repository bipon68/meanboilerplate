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
    RouterModule.forChild(approutes)
  ],
  declarations: [HomeComponent, DashboardComponent]
})
export class HomeModule { }
