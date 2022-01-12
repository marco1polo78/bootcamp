import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  public login(data: Object) {
    return this.http
      .post('http://localhost:8080/api/users/login', data, httpOptions)
      .subscribe({
        next: (data) => {
          this.setProfile(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  private setProfile(data: any) {
    localStorage.setItem('id_token', data.token);
  }
}
