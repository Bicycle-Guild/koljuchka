import { Injectable } from '@angular/core';
import { tasks } from './mocks/tasks';
import { Observable, of } from 'rxjs';
import { Task } from './models/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  getTasks(): Observable<Task[]> {
    return of(tasks);
  }

  getTaskByTestId(id: string): Observable<Task[]> {
    return of(tasks.filter(task => task.id === id));
  }
}
