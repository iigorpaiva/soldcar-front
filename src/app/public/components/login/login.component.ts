import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: UntypedFormGroup = new UntypedFormGroup({
    // email: new FormControl(null, [Validators.required, Validators.email]),
    login: new UntypedFormControl(null, [Validators.required]),
    password: new UntypedFormControl(null, [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router) { }


  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value).pipe(
      // route to protected/dashboard, if login was successfull
      tap(() => {
        this.router.navigate(['../../protected/home']);
        })
    ).subscribe();
  }

}
