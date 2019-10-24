import { Injectable } from '@angular/core';
import { IEmployee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  employeeArray: IEmployee[] = [];
  totalEmployees: number = this.employeeArray.length;
  i: number;

  updateEmployeeList(data) {
    data.avatar = '../../assets/' + data.avatar;
    console.log(data.avatar);
    this.employeeArray.push({avatar: data.avatar, name: data.name, companyName: data.companyName, emailID: data.emailID,
    contactNumber: data.contactNumber, designation: data.designation});
  }

  removeEmployee(data) {
    this.employeeArray.splice(data.index, 1);
  }

  constructor() { }
}
