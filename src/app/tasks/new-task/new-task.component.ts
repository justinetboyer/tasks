import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/models/task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  @Output() addEvent = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  constructor() {}

  ngOnInit() {}

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.addEvent.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate,
    });
  }
}
