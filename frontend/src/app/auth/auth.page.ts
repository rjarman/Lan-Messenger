import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  loginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });
  registerForm = this.formBuilder.group({
    userName: [''],
    email: [''],
    password: [''],
  });

  isRegistered: boolean;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.authService.clearData.subscribe((status) => {
      if (status) {
        this.registerForm.reset();
        this.loginForm.reset();
      }
    });
  }

  toRegister() {
    this.isRegistered = false;
  }
  toLogin() {
    this.isRegistered = true;
  }

  login() {
    const loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.authService.login(loginData);
  }

  register() {
    const regData = {
      name: this.registerForm.value.userName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };
    this.authService.register(regData);
  }
}
