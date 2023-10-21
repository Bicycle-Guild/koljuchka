import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from './models/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SubjectsService {
  private readonly _apiUrl = 'http://130.193.53.133/api/';

  constructor(private readonly _httpClient: HttpClient) {}

  getSubjects(): Observable<Subject[]> {
    return this._httpClient.get<Subject[]>(`${this._apiUrl}subjects`);
  }

  getSubjectByID(id: string): Observable<Subject> {
    return this._httpClient.get<Subject>(`${this._apiUrl}subjects/${id}`);
  }
}
