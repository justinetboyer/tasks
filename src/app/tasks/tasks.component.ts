import { TasksService } from './tasks.service';
import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: false,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input({required:true}) name!: string ;
  @Input({required:true}) id!: string ;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
