import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  LoginRequest,
  LoginResponseOb,
  RegisterResponse
} from '../interfaces';
import { LOCALSTORAGE_TOKEN_KEY, LOCALSTORAGE_USER_ROLE } from './../../app.module';

// export const fakeLoginResponse: LoginResponse = {
//   // fakeAccessToken.....should all come from real backend
//   accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
//   refreshToken: {
//     id: 1,
//     userId: 2,
//     token: 'fakeRefreshToken...should al come from real backend',
//     refreshCount: 2,
//     expiryDate: new Date(),
//   },
//   tokenType: 'JWT'
// }

export const fakeRegisterResponse: RegisterResponse = {
  status: 200,
  message: 'Registration sucessfull.',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private jwtService: JwtHelperService
  ) {}

  login(loginRequest: LoginRequest): Observable<LoginResponseOb> {
    return this.http
    .post<LoginResponseOb>(`${environment.apiUrl}/auth/login`, loginRequest)
    .pipe(
      tap((res: LoginResponseOb) => {
        localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.token);
        localStorage.setItem(LOCALSTORAGE_USER_ROLE, res.userRole);
      }),
      catchError((error) => {
        console.error('Erro na requisição de login:', JSON.stringify(error));
        throw error; // Rethrow the error to propagate it further
      }),
      tap(() =>
        this.snackbar.open('Login realizado com sucesso', 'Fechar', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        })
      )
    );
  }

  /*
   Get the user fromt the token payload
   */
  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken;
  }
}
