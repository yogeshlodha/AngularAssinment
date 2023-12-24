import { Component } from '@angular/core';
import { IUser } from '../../models/user';
import { UserMockService } from '../../services/user-mock.service';

@Component({
  selector: 'user-list',
  templateUrl: './userlist.component.html',
})
export class UserListComponent {
  users: IUser[] | undefined;
  constructor(private userService: UserMockService) {
    this.getUsersList();
  }

  // get user list.
  getUsersList(): void {
    this.userService.getUsers().subscribe({
      next: (d) => this.users = d,
      error: (er) => console.log(er)
    });
  }

}
