import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user';
import { UserMockService } from '../../services/user-mock.service';

@Component({
  selector: 'user-details',
  templateUrl: './userdetails.component.html',
})
export class UserDetailsComponent {
  userDetails: IUser | undefined;
  constructor(private route: ActivatedRoute, private userService: UserMockService) {
    this.getUserDetails(parseInt(route.snapshot.paramMap.get('id') as string));
  }

  // get user detail.
  getUserDetails(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (d) => this.userDetails = d,
      error: (er) => console.log(er)
    })
  }
}
