import { Component, Input, OnInit } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input({ required: true }) task!: Task;

  constructor() {}

  ngOnInit() {}
}
