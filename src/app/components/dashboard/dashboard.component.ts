import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employeeservice'
import { Dashboard } from '../../shared/dashboard.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardData: Dashboard = new Dashboard();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getDashboardData();
  }
  getDashboardData() {
    this.employeeService.getDashboardData().subscribe(
      (res: any) => {
        if (res) { // Check if response object exists
          this.dashboardData = res; // Assign response object to dashboardData
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}