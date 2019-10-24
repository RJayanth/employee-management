import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-management';

  constructor(private router: Router) {

  }

  addNewEmployee() {
  this.router.navigate(['/addnewemployee']);
  }

  editEmployee() {
    this.router.navigate(['/editemployee']);
  }

  viewEmployees() {
    this.router.navigate(['/viewemployees']);
  }

  deleteEmployee() {
    // this.router.navigate(['/deleteemployee']);
    alert('Are you sure, you want to remove the employee?');
  }
}
