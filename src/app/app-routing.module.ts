import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employee', component: EmployeedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
