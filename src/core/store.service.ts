import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _token: any;
  set token(token) {
    this.setValueToLocalStore('token', token);
  }

  get token() {
    return this.getValueFromLocalStore('token');
  }

  private _profile: any;
  set profile(profile) {
    this.setValueToLocalStore('profile', profile);
  }

  get profile() {
    return this.getValueFromLocalStore('profile');
  }


  setValueToLocalStore(key: string, value: any) {
    if (value) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  }


  getValueFromLocalStore(key: string): any {
    try {
      const data = localStorage.getItem(key);
      return JSON.parse(<string>data);
    } catch (e) {
      return localStorage.getItem(key);
    }
  }}
