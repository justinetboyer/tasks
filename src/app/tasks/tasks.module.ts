import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskComponent,
    TasksComponent,
    NewTaskComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [TasksComponent]
})
export class TasksModule { }
