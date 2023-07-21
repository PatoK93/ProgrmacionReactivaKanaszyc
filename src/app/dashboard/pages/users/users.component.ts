import { Component, OnDestroy } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './user.service';
import {
  Observable,
  map,
} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnDestroy {

  public users: Observable<User[]>;

  constructor(
    private userService: UserService
  ) {
        this.userService.loadUsers();
        
        this.users = this.userService.getUsers().pipe(
          map((obs) =>
          obs.map((user) => ({
          ...user,
          name: user.name.toUpperCase(),
          surname: user.surname.toUpperCase(),
        }))
      ));
      console.log(this.users);
  }

  ngOnDestroy(): void {
  }

}
