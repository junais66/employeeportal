import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Employee } from '../shared/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private baseUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient ) { }

    getDashboardData(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/Employee/GetDashboardData`);
    }
    getAllEmployees(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/Employee/GetAllEmployee`);
      }
      saveEmployeeData(employeeData: Employee): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/Employee/SaveEmployee`, employeeData);
      }
      updateEmployee(employee: Employee): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/Employee/${employee.id}`, employee);
      }
      deleteEmployee(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/Employee/${id}`);
      }
}
