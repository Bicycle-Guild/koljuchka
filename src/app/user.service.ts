import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface User {
  id: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUserById(userId: string): Observable<User> {
    return of({
      id: '123',
      email: 'john@doe.com',
    });
  }
}
