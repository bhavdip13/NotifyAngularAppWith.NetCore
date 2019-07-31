var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(http, _router, _employeeService) {
        this.http = http;
        this._router = _router;
        this._employeeService = _employeeService;
        this.getEmployees();
    }
    EmployeeComponent.prototype.getEmployees = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (data) { return _this.empList = data; });
        debugger;
        console.log(this.empList);
    };
    EmployeeComponent.prototype.notify = function (message) {
        var _this = this;
        this._employeeService.Notify(message).subscribe(function (data) { return _this.returnmsg = data; });
    };
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent = __decorate([
        Component({
            selector: 'app-employee',
            templateUrl: './employee.component.html',
            styleUrls: ['./employee.component.css']
        }),
        __metadata("design:paramtypes", [Http, Router, EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
export { EmployeeComponent };
//# sourceMappingURL=employee.component.js.map