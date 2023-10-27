import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LOCALSTORAGE_TOKEN_KEY } from '../../../app.module';
import { CarroResponse } from '../../_interfaces/carro-interface';

@Injectable({ providedIn: 'root' })
export class PatioService {
  constructor(private http: HttpClient) { }

  buscarCarrosPorPatio(patioId : Number): Observable<CarroResponse[]> {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
      responseType: 'json' as 'json'
    };

    return this.http.get<CarroResponse[]>(`${environment.apiUrl}/carro/buscarCarrosPorPatio?patioId=${patioId}`, httpOptions)
      .pipe(map(patios =>(patios)));
  }
}
