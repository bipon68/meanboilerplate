import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { FormComponent } from './form/form.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { LoginComponent } from './login/login.component';
import { FormCustomComponent } from './form-custom/form-custom.component';
import { FormSamplesComponent } from './form-samples/form-samples.component';
import { FormNotificationsComponent } from './form-notifications/form-notifications.component';
import { ErrorComponent } from './error/error.component';
import { DataTableComponent } from './data-table/data-table.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { UiCardsComponent } from './ui-cards/ui-cards.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [	
    AppComponent,
    //DashboardComponent,
    ChartsComponent,
    FormComponent,
    BasicTableComponent,
    LoginComponent,
    FormCustomComponent,
    FormSamplesComponent,
    FormNotificationsComponent,
    ErrorComponent,
    DataTableComponent,
    BootstrapComponent,
    UiCardsComponent,
    WidgetsComponent,
    NotfoundComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
