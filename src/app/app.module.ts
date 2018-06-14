import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContextpanelComponent } from './contextpanel/contextpanel.component';
import { AppRoutingModule } from './/app-routing.module';
import { MapComponent } from './map/map.component';
import { FactoryComponent } from './factory/factory.component';
import { ProgressComponent } from './progress/progress.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContextpanelfilterComponent } from './contextpanelfilter/contextpanelfilter.component';
import { AlertdetailsComponent } from './alertdetails/alertdetails.component';
import { Adal6Service, Adal6HTTPService } from 'adal-angular6';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    DashboardComponent,
    ContextpanelComponent,
    MapComponent,
    FactoryComponent,
    ProgressComponent,
    AlarmsComponent,
    TabComponent,
    TabsComponent,
    ContextpanelfilterComponent,
    AlertdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    Adal6Service,
    { provide: Adal6HTTPService, useFactory: Adal6HTTPService.factory, deps: [HttpClient, Adal6Service] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
