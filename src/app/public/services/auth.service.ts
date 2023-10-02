import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../interfaces';
import { LOCALSTORAGE_TOKEN_KEY, tokenGetter } from './../../app.module';

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

  /*
   Due to the '/api' the url will be rewritten by the proxy, e.g. to http://localhost:8080/api/auth/login
   this is specified in the src/proxy.conf.json
   the proxy.conf.json listens for /api and changes the target. You can also change this in the proxy.conf.json

   The `..of()..` can be removed if you have a real backend, at the moment, this is just a faked response
  */
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    // return of(fakeLoginResponse).pipe(
    //   tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)),
    //   tap(() => this.snackbar.open('Login Successfull', 'Close', {
    //     duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
    //   }))
    // );
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
        this.snackbar.open('Login realizado com sucesso', 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        })
      )
    );
  }

  /*
   The `..of()..` can be removed if you have a real backend, at the moment, this is just a faked response
  */
  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    let httpOptions;
    if(tokenGetter()){
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenGetter()}`,
        }),
      };
    }
    // TODO
    // return of(fakeRegisterResponse).pipe(
    //   tap((res: RegisterResponse) =>
    //     this.snackbar.open(`User created successfully`, 'Close', {
    //       duration: 2000,
    //       horizontalPosition: 'right',
    //       verticalPosition: 'top',
    //     })
    //   )
    // );
    return this.http.post<RegisterResponse>(`${environment.apiUrl}/auth/register`, registerRequest, httpOptions).pipe(
    tap((res: RegisterResponse) => this.snackbar.open(`User created successfully`, 'Close', {
     duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
    }))
    )
  }

  /*
   Get the user fromt the token payload
   */
  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}
