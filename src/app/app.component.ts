import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedID?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedID);
  }

  onUserSelected(id: string) {
    this.selectedID = id;
  }
}
