import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SoldcarUser } from '../_models/user';
import { Observable, map } from 'rxjs';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  buscarTodosOsUsuarios(): Observable<MatTableDataSource<SoldcarUser>> {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
      responseType: 'json' as 'json'
    };

    return this.http.get<SoldcarUser[]>(`${environment.apiUrl}/users/buscarTodosOsUsuarios`, httpOptions)
      .pipe(map(usuarios => new MatTableDataSource<SoldcarUser>(usuarios)));
  }
}
