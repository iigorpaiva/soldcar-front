import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LOCALSTORAGE_TOKEN_KEY } from '../../../app.module';
import { PatioResponse } from '../../_interfaces/patio-Interfaces';

@Injectable({ providedIn: 'root' })
export class PatioService {
  constructor(private http: HttpClient) { }

  buscarCarroPorPatio(patioId: Number): Observable<PatioResponse[]> {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
      responseType: 'json' as 'json'
    };

    return this.http.get<PatioResponse[]>(`${environment.apiUrl}/patio/buscarTodosOsPatios`, httpOptions)
      .pipe(map(patios =>(patios)));
  }
}
