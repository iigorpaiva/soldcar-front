import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, catchError, map, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LOCALSTORAGE_TOKEN_KEY, tokenGetter } from '../../../app.module';
import { SoldcarUser } from './../../_interfaces/user-interfaces';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient,
    private snackbar: MatSnackBar,
    ) { }

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

  excluirUsuario(userId: number): Observable<void> {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
      responseType: 'json' as 'json'
    };

    return this.http.delete<void>(`${environment.apiUrl}/users/${userId}`, httpOptions);
  }

  editarUsuario(usuarioEditado: SoldcarUser): Observable<SoldcarUser> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenGetter()}`,
      }),
      responseType: 'json' as 'json'
    };
    return this.http.put<SoldcarUser>(
      `${environment.apiUrl}/users/${usuarioEditado.id}`,
      usuarioEditado,
      httpOptions).
    pipe(
      map((response: any) => response), // Transforma a resposta em um objeto RegisterResponse
      tap((res: SoldcarUser) =>
        this.snackbar.open(`Usuário editado com sucesso.`, 'Fechar', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        })
      ),
      catchError((error) => {
        console.error('Erro na requisição de editar usuário:', JSON.stringify(error));
        throw error;
      }),
    );;
  }
}
