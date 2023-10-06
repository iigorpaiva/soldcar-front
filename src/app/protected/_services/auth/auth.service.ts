import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map, tap } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { tokenGetter } from './../../../app.module';
import { RegisterRequest, RegisterResponse } from './../../../public/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private jwtService: JwtHelperService
  ) {}

  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    let httpOptions;
    if (tokenGetter()) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenGetter()}`,
        }),
      };
    }
    return this.http.post<RegisterResponse>(
      `${environment.apiUrl}/auth/register`,
      registerRequest,
      httpOptions
    ).pipe(
      map((response: any) => response), // Transforma a resposta em um objeto RegisterResponse
      tap((res: RegisterResponse) =>
        this.snackbar.open(`User created successfully`, 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        })
      )
    );
  }

  /*
   Get the user from the token payload
   */
  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}
