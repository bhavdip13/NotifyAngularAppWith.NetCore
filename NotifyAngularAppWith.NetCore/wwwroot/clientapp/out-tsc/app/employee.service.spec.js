import { TestBed, inject } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
describe('EmployeeService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [EmployeeService]
        });
    });
    it('should be created', inject([EmployeeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=employee.service.spec.js.map