import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LOCALSTORAGE_TOKEN_KEY } from '../../../app.module';
import { SoldcarUser } from '../../_interfaces/user-interfaces';

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
