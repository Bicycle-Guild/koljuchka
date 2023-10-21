import { Injectable } from '@angular/core';
import { tasks } from './mocks/tasks';
import { Observable, of } from 'rxjs';
import { Task } from './models/Task';

@Injectable({ providedIn: 'root' })
export class TasksService {
  getTaskByTestId(id: string): Observable<Task[]> {
    return of(tasks);
  }
}
