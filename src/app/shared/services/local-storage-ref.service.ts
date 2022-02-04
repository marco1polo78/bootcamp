import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageRefService {
  loggin: BehaviorSubject<string|null> = new BehaviorSubject(localStorage.getItem('id_token'));

  public setInfo(token: string) {
    localStorage.setItem('id_token', token);
    this.loggin.next(token);
  }

  public cleanInfo() {
    localStorage.removeItem('id_token');
    this.loggin.next(null);
  }
}
