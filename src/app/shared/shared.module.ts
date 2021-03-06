import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent,
    HeaderComponent,
    SidebarComponent
  ],exports:[
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
