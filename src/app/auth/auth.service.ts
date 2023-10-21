import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Subject, of, switchMap } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _prefix = 'koljucka';
  private _stubToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJleHAiOjE1MTYyMzkwMjJ9.f8V2S8UVbqCXJhPesBKk3aq0kNHSa-BABrcrFPyxuMo';

  private _accesSubject = new Subject<string | undefined>();
  acessToken = this._accesSubject.asObservable();

  user = this._accesSubject.pipe(
    switchMap((token) => {
      if (!token || !token.split('.')[1]) return of(undefined);

      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const userId = tokenPayload.userId;

      if (!userId) return of(undefined);

      return this._userService.getUserById(userId);
    })
  );

  constructor(
    private readonly _localStorageService: LocalStorageService,
    private _httpClient: HttpClient,
    private _userService: UserService
  ) {
    const token = this._localStorageService.getItem(`${this._prefix}_token`);
    if (token) {
      this._accesSubject.next(token);
    }
  }

  login(login: string, password: string) {
    this._accesSubject.next(this._stubToken);
  }

  logout() {
    this._localStorageService.removeItem(`${this._prefix}_token`);
    this._accesSubject.next(undefined);
  }

  register(login: string, password: string) {
    this._accesSubject.next(this._stubToken);
  }
}
