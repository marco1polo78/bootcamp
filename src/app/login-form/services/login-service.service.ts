import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageRefService } from 'src/app/shared/services/local-storage-ref.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient, private localStorageRefService: LocalStorageRefService) {}

  public login(data: Object) {
    return this.http
      .post('http://localhost:8080/api/users/login', data, httpOptions)
      .subscribe({
        next: (data: any) => {
          this.localStorageRefService.setInfo(data.token);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
