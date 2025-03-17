import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) avatar!: string ;
  @Input({required:true}) name!: string ;
  @Input({required:true}) id!: string ;
  @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => `assets/users/${this.avatar()}`);
  // select = output<string>();

  get imagePath(){
    return `assets/users/${this.avatar}`;
  }

  onUserSelected() {
    this.select.emit(this.id);
  }
}
