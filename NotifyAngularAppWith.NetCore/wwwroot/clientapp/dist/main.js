(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app-routing.module.ts":
/*!***********************************!*\
  !*** ./app/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee/employee.component */ "./app/employee/employee.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message/message.component */ "./app/message/message.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    { path: 'employee', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeComponent"] },
    { path: 'message', component: _message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato\">\r\n\r\n<!-- Navbar (sit on top) -->\r\n<div class=\"w3-top\">\r\n    <div class=\"w3-bar\" id=\"myNavbar\">\r\n        <a class=\"w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right\" href=\"javascript:void(0);\" onclick=\"toggleFunction()\" title=\"Toggle Navigation Menu\">\r\n            <i class=\"fa fa-bars\"></i>\r\n        </a>\r\n        <a routerLink=\"/home\" class=\"w3-bar-item w3-button\">HOME</a>\r\n        <a routerLink=\"/employee\" class=\"w3-bar-item w3-button w3-hide-small\"><i class=\"fa fa-user\"></i> Employee</a>\r\n        <a routerLink=\"/message\" class=\"w3-bar-item w3-button w3-hide-small\"><i class=\"fa fa-bullhorn\"></i> Message</a>\r\n    </div>\r\n\r\n    <!-- Navbar on small screens -->\r\n    <div id=\"navDemo\" class=\"w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium\">\r\n        <a routerLink=\"/employee\" class=\"w3-bar-item w3-button\" onclick=\"toggleFunction()\">Employee</a>\r\n        <a routerLink=\"/message\" class=\"w3-bar-item w3-button\" onclick=\"toggleFunction()\">Message</a>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- Footer -->\r\n<footer class=\"w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off\">\r\n    <div class=\"w3-xlarge w3-section\">\r\n        <i class=\"fa fa-facebook-official w3-hover-opacity\"></i>\r\n        <i class=\"fa fa-instagram w3-hover-opacity\"></i>\r\n        <i class=\"fa fa-snapchat w3-hover-opacity\"></i>\r\n        <i class=\"fa fa-pinterest-p w3-hover-opacity\"></i>\r\n        <i class=\"fa fa-twitter w3-hover-opacity\"></i>\r\n        <i class=\"fa fa-linkedin w3-hover-opacity\"></i>\r\n    </div>\r\n    <p>develop by <a target=\"_blank\" href=\"https://bhavdip13.github.io/portfolio\" title=\"Bhavdip\" class=\"w3-hover-text-green\">Bhavdip Talaviya</a></p>\r\n</footer>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/employee.component */ "./app/employee/employee.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./app/app-routing.module.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee.service */ "./app/employee.service.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message/message.component */ "./app/message/message.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/employee.service.ts":
/*!*********************************!*\
  !*** ./app/employee.service.ts ***!
  \*********************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "../node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "../node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ClientApp/environments/environment */ "./environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        var headerSettings = {};
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"](headerSettings);
    }
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get(this.myAppUrl + 'api/Employee')
            .map(function (response) { return response.json(); });
        debugger;
    };
    EmployeeService.prototype.Notify = function (message) {
        debugger;
        return this._http.post(this.myAppUrl + 'api/Message?message=' + message, { headers: this.header })
            .map(function (response) { return response.json(); });
        debugger;
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./app/employee/employee.component.css":
/*!*********************************************!*\
  !*** ./app/employee/employee.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/employee/employee.component.html":
/*!**********************************************!*\
  !*** ./app/employee/employee.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<br />\r\n<br />\r\n<br />\r\n<h3 class=\"text-center\">Employee Data</h3>\r\n\r\n\r\n<p *ngIf=\"!empList\"><em>Loading...</em></p>\r\n\r\n\r\n<table class='table table-striped' *ngIf=\"empList\">\r\n    <thead>\r\n        <tr>\r\n            <th>EmployeeId</th>\r\n            <th>Name</th>\r\n            <th>Email</th>\r\n            <th>Phone</th>\r\n            <th>Gender</th>\r\n            <th>Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let emp of empList\">\r\n            <td>{{ emp.empID }}</td>\r\n            <td>{{ emp.name }}</td>\r\n            <td>{{ emp.email }}</td>\r\n            <td>{{ emp.phone }}</td>\r\n            <td>{{ emp.gender }}</td>\r\n            <td>\r\n                <a class=\"btn btn-secondary\" style=\"cursor:pointer;color:white;\" (click)=\"notify(emp.name)\"><i _ngcontent-c0=\"\" class=\"fa fa-bullhorn\"></i> Notify</a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table> "

/***/ }),

/***/ "./app/employee/employee.component.ts":
/*!********************************************!*\
  !*** ./app/employee/employee.component.ts ***!
  \********************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee.service */ "./app/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./app/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./app/home/home.component.css":
/*!*************************************!*\
  !*** ./app/home/home.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* Create a Parallax Effect */\r\n.bgimg-1 {\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.w3-top {\r\n    background-color: #000000;\r\n    padding-bottom: 50px;\r\n}\r\n.w3-wide {\r\n    letter-spacing: 10px;\r\n}\r\n.w3-hover-opacity {\r\n    cursor: pointer;\r\n}\r\n/* First image (Logo. Full height) */\r\n.bgimg-1 {\r\n    background-image: url('https://ansibytecode.com/wp-content/uploads/2019/02/signalR.png');\r\n    min-height: 100%;\r\n}\r\n/* Turn off parallax scrolling for tablets and phones */\r\n@media only screen and (max-device-width: 1600px) {\r\n    .bgimg-1 {\r\n        background-attachment: scroll;\r\n        min-height: 650px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsOEJBQThCO0FBQzlCO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0NBQ3hCO0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVELHFDQUFxQztBQUNyQztJQUNJLHlGQUF5RjtJQUN6RixpQkFBaUI7Q0FDcEI7QUFFRCx3REFBd0Q7QUFDeEQ7SUFDSTtRQUNJLDhCQUE4QjtRQUM5QixrQkFBa0I7S0FDckI7Q0FDSiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyogQ3JlYXRlIGEgUGFyYWxsYXggRWZmZWN0ICovXHJcbi5iZ2ltZy0xIHtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnczLXRvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi53My13aWRlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udzMtaG92ZXItb3BhY2l0eSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIEZpcnN0IGltYWdlIChMb2dvLiBGdWxsIGhlaWdodCkgKi9cclxuLmJnaW1nLTEge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2Fuc2lieXRlY29kZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDIvc2lnbmFsUi5wbmcnKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFR1cm4gb2ZmIHBhcmFsbGF4IHNjcm9sbGluZyBmb3IgdGFibGV0cyBhbmQgcGhvbmVzICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDE2MDBweCkge1xyXG4gICAgLmJnaW1nLTEge1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/home/home.component.html":
/*!**************************************!*\
  !*** ./app/home/home.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- First Parallax Image with Logo Text -->\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato\">\r\n<div class=\"bgimg-1 w3-display-container w3-opacity-min\" id=\"home\">\r\n    <div class=\"w3-display-middle\" style=\"white-space:nowrap;\">\r\n        <span class=\"w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity\">.NET Core + Angular + SignalR</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/home/home.component.ts":
/*!************************************!*\
  !*** ./app/home/home.component.ts ***!
  \************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/message/message.component.css":
/*!*******************************************!*\
  !*** ./app/message/message.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    min-height: 392px !important;\r\n    margin-bottom: 0px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtDQUNqQyIsImZpbGUiOiJtZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgbWluLWhlaWdodDogMzkycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/message/message.component.html":
/*!********************************************!*\
  !*** ./app/message/message.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"text-align:center\">\r\n    <div class=\"jumbotron\">\r\n        <h1>{{msgs}}</h1>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/message/message.component.ts":
/*!******************************************!*\
  !*** ./app/message/message.component.ts ***!
  \******************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "../node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! speak-tts */ "../node_modules/speak-tts/lib/speak-tts.js");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(speak_tts__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HubConnection } from '@aspnet/signalr';


var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var speech = new speak_tts__WEBPACK_IMPORTED_MODULE_2___default.a();
        speech
            .init({
            volume: 1,
            lang: "hi-IN",
            rate: 1,
            pitch: 1,
        })
            .then(function (data) {
            console.log("Speech is ready", data);
        })
            .catch(function (e) {
            console.error("An error occured while initializing : ", e);
        });
        //signalR logic
        var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information)
            .withUrl("http://localhost:8840/notify")
            .build();
        connection.start().then(function () {
            console.log('Connected!');
        }).catch(function (err) {
            return console.error(err.toString());
        });
        connection.on("BroadcastMessage", function (message) {
            _this.msgs = 'Broadcast Name is ' + message;
            speackMessage(speech, _this.msgs);
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());

function speackMessage(speech, message) {
    speech.speak({
        text: message,
    }).then(function () {
        console.log("Success !");
    }).catch(function (e) {
        console.error("An error occurred :", e);
    });
}


/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8840/'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Demo\NotifyAngularAppWith.NetCore\NotifyAngularAppWith.NetCore\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map