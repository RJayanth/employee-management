import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';


const routes: Routes = [
  { path: 'addnewemployee', component : AddNewEmployeeComponent},
  { path: 'viewemployees', component: ViewEmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
