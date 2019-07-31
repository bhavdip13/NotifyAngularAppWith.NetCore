import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { environment } from 'ClientApp/environments/environment';
import { debug } from 'util';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    myAppUrl: string = "";  
    header: any;

    constructor(private _http: Http) {
        this.myAppUrl = environment.baseUrl;
        const headerSettings: { [name: string]: string | string[]; } = {};
        this.header = new HttpHeaders(headerSettings);

    }  
    getEmployees() {
        
         return this._http.get(this.myAppUrl + 'api/Employee')
            .map((response: Response) => response.json())  

        debugger
            
    }
    Notify(message: string) {
        debugger
        return this._http.post(this.myAppUrl + 'api/Message?message=' + message, { headers: this.header })
            .map((response: Response) => response.json())

        debugger

    }  
}
