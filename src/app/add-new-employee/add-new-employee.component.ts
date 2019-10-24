import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee.model';
import { EmployeeListService } from '../employee-list.service';


@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit, IEmployee {

  name: string;
  companyName: string;
  emailID: string;
  contactNumber: number;
  designation: string;
  i: number;
  totalEmployees: number;
  avatar: any;

  constructor( private els: EmployeeListService) { }

  ngOnInit() {

    this.totalEmployees = this.els.employeeArray.length;
  }

  onSubmit(playlistForm) {

      this.avatar = Math.floor(Math.random() * 9);
      this.avatar = this.avatar + '.JPG';
      console.log(this.avatar);
  //   console.log('Employees Count', this.els.employeeArray.length);
  //   if (this.els.employeeArray.length >= 1) {
  //     for (this.i = 0; this.i < this.els.employeeArray.length ; this.i++) {
  //       console.log('present Email ID', this.emailID);
  //       console.log('total email IDs', this.els.employeeArray[this.i].emailID);
  //       if (this.emailID === this.els.employeeArray[this.i].emailID) {
  //         alert('Employee already exist');
  //         break;
  //       }
  //     }
      // } else {
      //  console.log('thanks for the details, we are adding this employee!', this.name, this.companyName, this.emailID, this.contactNumber,
      //   this.designation);
      //   this.els.updateEmployeeList({['name']: this.name, ['companyName']: this.companyName, ['emailID']: this.emailID,
      //   ['contactNumber']: this.contactNumber, ['designation']: this.designation});
      //   }
      // }
    // } else { // this gets executed only once, if ther are no employees
      console.log('thanks for the details, we are adding this employee!', this.name, this.companyName, this.emailID, this.contactNumber,
      this.designation);
      this.els.updateEmployeeList({['avatar']: this.avatar, ['name']: this.name, ['companyName']: this.companyName,
      ['emailID']: this.emailID, ['contactNumber']: this.contactNumber, ['designation']: this.designation});
      alert('Employee Added successfuly, use View/ EDit/ Delete employee option to see results!');
      playlistForm.reset();
    }

  }
// }
