import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http'
import { debug } from 'util';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    public empList: EmployeeData[];
    public returnmsg: string;
    
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {
        this.getEmployees();
    }  
    getEmployees() {
        this._employeeService.getEmployees().subscribe(
            data => this.empList = data
            
        )
        debugger
        console.log(this.empList);
    } 
    notify(message) {
        this._employeeService.Notify(message).subscribe(
            data => this.returnmsg = data

        )
    } 
  ngOnInit() {
  }

}
interface EmployeeData {
    EmpID: number;
    Name: string;
    Email: string;
    Phone: string;
    Gender: string;
    Password: string;

}  