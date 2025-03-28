import { Component, inject, Input, OnInit } from '@angular/core';
import { Task } from './models/task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  private tasksService = inject(TasksService);
  
  @Input({ required: true }) task!: Task;

  constructor() {}

  ngOnInit() {}

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
