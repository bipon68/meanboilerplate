import { SharedModule } from './../../shared/shared.module';
import { DashboardComponent } from './../../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const approutes: Routes = [
  { path: '', component: HomeComponent,
        children: [
           //{ path: 'my-comp', component: MyComponentComponent, },
           {path: 'dashboard', component: DashboardComponent},
       ]
   },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(approutes),
    SharedModule
  ],
  declarations: [HomeComponent,DashboardComponent]
})
export class HomeModule { }
