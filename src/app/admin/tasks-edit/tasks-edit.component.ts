import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UImodules } from 'src/app/ui-modules';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from 'src/app/tasks.service';
import { Observable, take } from 'rxjs';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks-edit',
  standalone: true,
  imports: [CommonModule, ...UImodules, ReactiveFormsModule],
  providers: [TasksService],
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.scss'],
})
export class TasksEditComponent implements OnInit {
  @Input() testId!: string;
  tasks$!: Observable<Task[]>;

  readonly types = ['multi', 'single', 'full'];

  constructor(private _taskService: TasksService) {}

  ngOnInit(): void {
    if (this.testId)
      this.tasks$ = this._taskService.getTaskByTestId(this.testId).pipe(take(1));
  }

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl('multi'),
  });
}
