import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onCancel() {
    this.cancel.emit();
  }
}
