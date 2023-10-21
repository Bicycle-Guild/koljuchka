import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Test } from './models/Test';
import { testsMock } from './mocks/tests.mock';

@Injectable({ providedIn: 'root' })
export class TestsService {
    getTestsBySubjectId(subjectId: string): Observable<Test[]> {
        return of(testsMock);
    }
    
    getTestsByID(id: string): Observable<Test | undefined> {
        return of(testsMock.find(test => test.id === id));
    }
}