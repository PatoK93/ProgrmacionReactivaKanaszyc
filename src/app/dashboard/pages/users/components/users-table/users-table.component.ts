import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  
  displayedColumns: string[] = ['id', 'fullName', 'email'];

  @Input()
  dataSource: User[] = [];
}
