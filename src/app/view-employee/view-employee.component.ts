import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../employee-list.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  totalEmployees: number;
  i: number;
  employee: number;
  isEmployeeListEmpty: boolean;

  constructor(private els: EmployeeListService) { }

  ngOnInit() {
    console.log('isEmployeeListEmpty', this.isEmployeeListEmpty);
    console.log('Employees List', this.els.employeeArray);
    console.log('Employee A phone number', this.els.employeeArray[0].contactNumber);
    console.log('total employees', this.els.employeeArray.length);
    this.totalEmployees = this.els.employeeArray.length;
    if ( this.totalEmployees < 1) {
      this.isEmployeeListEmpty = true;
      console.log('isEmployeeListEmpty', this.isEmployeeListEmpty);
    }
  }

  removeEmployee(tr, trIndex) {
    if (confirm('Are you sure you want to remove this remployee')) {
      console.log(tr);
      console.log(trIndex);
      this.els.removeEmployee({['index']: trIndex});
    }
  }

}
