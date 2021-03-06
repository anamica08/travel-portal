import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPrintModule} from 'ngx-print';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TicketListComponent } from './ticket-list/ticket-list.component'
import{ HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import {CoronaStatsService } from '../app/service/corona-stats.service';
import { CoronaStatsCountryComponent } from './corona-stats-country/corona-stats-country.component';
import { RegistrationComponent } from './registration/registration.component'

import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TicketConfirmationComponent } from './ticket-confirmation/ticket-confirmation.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { AdminUpdateTicketComponent } from './admin-update-ticket/admin-update-ticket.component';



  



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TicketListComponent,
    
    PageNotFoundComponent,
    
    LoginComponent,
    
    LogoutComponent,
    
    ForgotPasswordComponent,
    
  
    
    CoronaStatsCountryComponent,
    
    RegistrationComponent,
    
    RegistrationConfirmationComponent,
    
    TicketDetailsComponent,
    
    RaiseTicketComponent,
    
    TicketConfirmationComponent,
    
    EditTicketComponent,
    
    AdminUpdateTicketComponent,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule
  ],
  providers: [
  {

    provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true ,
    
    
  },
  CoronaStatsService,
 
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
