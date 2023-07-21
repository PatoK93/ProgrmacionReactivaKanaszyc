import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private users: User[] = [
    {
      id: 1,
      name: 'Marcos',
      surname: 'Rodriguez',
      email: 'mrodriguez@mail.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'Julian',
      surname: 'Perez',
      email: 'jperez@mail.com',
      password: '123456',
    },
    {
      id: 3,
      name: 'Juan',
      surname: 'Garcia',
      email: 'jgarcia@mail.com',
      password: '123456',
    },
  ];

  private _users$ = new BehaviorSubject<User[]>([]);
  private users$ = this._users$.asObservable();

  constructor() {}

  loadUsers(): void {
    this._users$.next(this.users);
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }


}
