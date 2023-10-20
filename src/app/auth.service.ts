import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _acessToken: string = '';
  private readonly _Api = '';
  private readonly _prefix = 'koljucka';

  constructor(
    private readonly _localStorageService: LocalStorageService,
    private _httpClient: HttpClient
  ) {}

  login(login: string, password: string) {
    this._httpClient.post(`${this._Api}/login`, {
      login: login,
      password: password,
    });
  }
  logout() {
    this._httpClient
      .post(`${this._Api}/logout`, {})
      .subscribe(() => this._localStorageService.removeItem('auth_token'));
  }
}
