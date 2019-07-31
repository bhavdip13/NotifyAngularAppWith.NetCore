import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeService } from './employee.service';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MessageComponent,
    HomeComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule, HttpModule
    ],

    providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
