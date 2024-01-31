import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  AuthResponseData,
  AuthService,
} from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  showLoader = false;
  errorMessage = null;
  isSignUpMode = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const email = form.value.email;
    const password = form.value.password;
    let authObservable: Observable<AuthResponseData>;
    if (this.isSignUpMode) {
      authObservable = this.authService.signUp(email, password);
    } else {
      authObservable = this.authService.login(email, password);
    }
    // Add loader
    // this.showLoader = true;

    authObservable.subscribe(
      (response) => {
        console.log(response);
        this.showLoader = false;
        this.errorMessage = null;
        this.router.navigate(['/home']);
      },
      (errRes) => {
        console.log(errRes);
        this.errorMessage = errRes;
        // this.showErrorAlert(this.errorMessage);
        this.showLoader = false;
      }
    );
    form.reset();
  }

  switchSignUpMode() {
    // console.log(this.isSignUpMode);
    this.isSignUpMode = !this.isSignUpMode;
  }
}
