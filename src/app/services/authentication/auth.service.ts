import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.modal';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
  displayName: string;
  kind: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  tokenExpirationTimer: ReturnType<typeof setTimeout> | undefined;
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBC2timDFf828-_3gufgFi15mEr3UjwAhU',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
          this.autoLogout(+resData.expiresIn * 1000);
        })
      );
  }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBC2timDFf828-_3gufgFi15mEr3UjwAhU',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
    clearInterval(this.tokenExpirationTimer);
    this.router.navigate(['home']);
  }

  autoLogin() {
    let existingUserData = localStorage.getItem('userData');
    if (!existingUserData) {
      // If there is no User object in localStorage
      return;
    } else {
      const loadedUserData: User = JSON.parse(existingUserData);
      if (loadedUserData.token) {
        const tokenExpirationDuration =
          new Date(loadedUserData.tokenExpirationDate).getTime() -
          new Date().getTime();
        this.autoLogout(tokenExpirationDuration);
        this.user.next(loadedUserData);
      }
      return;
    }
  }

  autoLogout(expirationDuration: number) {
    // starts a timeout function that'll call logout when token expires
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorObject: HttpErrorResponse) {
    let errorMessage = 'unknown error!';
    if (!errorObject.error || !errorObject.error.error)
      return throwError(errorMessage);
    switch (errorObject.error?.error?.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'the email already exists!!';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Try again later';
    }
    return throwError(errorMessage);
  }
}
