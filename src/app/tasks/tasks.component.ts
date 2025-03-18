import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input({required:true}) name!: string ;

  constructor() { }

  ngOnInit() {
  }

}
