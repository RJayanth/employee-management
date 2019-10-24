import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeListService } from './employee-list.service';

@NgModule({
  declarations: [
    AppComponent,
    AddNewEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
