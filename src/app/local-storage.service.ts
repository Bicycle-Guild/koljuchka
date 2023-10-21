import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem(key: string, value: any): void {
    localStorage.setItem(key, this._toJSON(value));
  }

  getItem<T = any>(key: string): T | null {
    return this._parseJSON(localStorage.getItem(key));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  private _toJSON(value: any): string {
    try {
      return JSON.stringify(value);
    } catch (err) {
      console.warn('Can not convert to JSON: ', value, err);
      return value.toString();
    }
  }

  private _parseJSON(value: string | null): any {
    if (value == null) {
      return null;
    }
    try {
      return JSON.parse(value);
    } catch (err) {
      console.warn('Can not parse as JSON: ', value, err);
      return value;
    }
  }
}
