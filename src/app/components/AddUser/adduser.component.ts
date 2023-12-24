import { Component, ViewChild } from '@angular/core';
import { IUser } from '../../models/user';
import { UserMockService } from '../../services/user-mock.service';
import { UserErrorComponent } from '../UserError/usererror.component';

@Component({
  selector: 'add-user',
  templateUrl: './adduser.component.html',
})
export class AddUserComponent {
  email: string = '';
  firstName: string = '';
  IsValidateFrom: boolean = true;
  lastName: string = '';
  users: IUser[] = [];
  @ViewChild(UserErrorComponent) userError: UserErrorComponent | undefined;

  constructor(private userService: UserMockService) {
    this.getUsersList();
    this.userError = new UserErrorComponent();
  }

  // Notify event from child.
  resaveFormData(): void {
    console.log("resave form data.");
    this.IsValidateFrom = true;
  }

  // Save form data.
  onSave() {

    if (this.firstName.trim().length == 0) {
      this.userError?.validationLog("FirstName", "Empty", "enter the first name.");
      this.IsValidateFrom = false;
    }

    if (this.lastName.trim().length == 0) {
      this.userError?.validationLog("LastName", "Empty", "enter the last name.");
      this.IsValidateFrom = false;
    }

    if (this.email.trim().length == 0) {
      this.userError?.validationLog("Email", "Empty", "enter the email.");
      this.IsValidateFrom = false;
    }

    if (this.IsValidateFrom) {
      this.getUsersList();
      const user: IUser = {
        id: this.users.length + 1,
        First_Name: this.firstName,
        Last_Name: this.lastName,
        Email: this.email
      }

      this.userService.addUser(user).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (er) => console.log(er)
      });
    }
  }

  // get user list.
  getUsersList(): void {
    this.userService.getUsers().subscribe({
      next: (d) => this.users = d,
      error: (er) => console.log(er)
    });
  }
}
