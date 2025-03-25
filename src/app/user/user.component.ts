import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
import { User } from './models/user.model';
import { CardComponent } from "../shared/card/card.component";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user! : User;
  @Input({required:true}) selectedUser! : boolean;
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => `assets/users/${this.avatar()}`);
  // select = output<string>();

  get imagePath(){
    return `assets/users/${this.user.avatar}`;
  }

  onUserSelected() {
    this.select.emit(this.user.id);
  }
}
