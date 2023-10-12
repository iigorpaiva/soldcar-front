import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  LoginRequest,
  LoginResponse,
  RegisterResponse
} from '../interfaces';
import { LOCALSTORAGE_TOKEN_KEY } from './../../app.module';

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

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http
    .post<LoginResponse>(`${environment.apiUrl}/auth/login`, loginRequest)
    .pipe(
      tap((res: LoginResponse) => {
        console.log('Login success:', res);
        localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.token);
      }),
      catchError((error) => {
        console.error('Error in login request:', JSON.stringify(error));
        throw error; // Rethrow the error to propagate it further
      }),
      tap(() =>
        this.snackbar.open('Login realizado com sucesso', 'Fechar', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
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
