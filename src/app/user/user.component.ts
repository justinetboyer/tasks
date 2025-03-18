import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';

interface User {avatar: string, name: string, id: string}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user! : User;
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
