import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from './models/Subject';
import { subjectCards } from './mocks/subject-cards';

@Injectable({ providedIn: 'root' })
export class SubjectsService {
  getSubjects(): Observable<Subject[]> {
    return of(subjectCards);
  }
  getSubjectByID(id: string): Observable<Subject | undefined> {
    return of(subjectCards.find((subject) => subject.id === id));
  }
}
