import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  public emailLogin: string;
  public passwordLogin: string;

  public userNameRegister: string;
  public emailRegister: string;
  public passwordRegister: string;

  public isRegistered: boolean;
  constructor(private authService: AuthService, private router: Router,
              private cookieService: CookieService, private settingsService: SettingsService) {
    this.isRegistered = true;
    if (this.cookieService.get('isLogin') === 'true' && this.cookieService.check('isLogin')) {
      console.log(this.cookieService.get('isLogin'));
      this.router.navigate(['/tabs']);
    } else {
      this.router.navigate(['/auth']);
      this.emailLogin = '';
      this.passwordLogin = '';
      this.userNameRegister = '';
      this.emailRegister = '';
      this.passwordRegister = '';
    }
  }

  ngOnInit() {
    // this.settingsService.isLogin.subscribe(res => {
    //   console.log(res);
    //   if (!res) {
    //     this.cookieService.set('isLogin', 'false');
    //   }
    // });
  }

  public toRegister() {
    this.isRegistered = false;
  }
  public toLogin() {
    this.isRegistered = true;
  }

  public setLogin() {
    this.authService.setEmailLogin = this.emailLogin;
    this.authService.setPasswordLogin = this.passwordLogin;
    this.authService.login(this.emailLogin, this.passwordLogin);
    this.authService.isLogin.subscribe(res => {
      if (res) {
        if (!this.cookieService.check('isLogin')) {
          this.cookieService.set('isLogin', 'true', 100000);
        }
        if (!this.cookieService.check('email')) {
          this.cookieService.set('email', this.emailLogin, 100000);
        }
        this.router.navigateByUrl('/tabs/list');
      }
    });
  }

  public setRegister() {
    this.authService.setUserNameRegister = this.userNameRegister;
    this.authService.setEmailRegister = this.emailRegister;
    this.authService.setPasswordRegister = this.passwordRegister;
    this.authService.register(this.userNameRegister, this.emailRegister, this.passwordRegister);
    this.authService.isRegister.subscribe(res => {
      if (res) {
        if (!this.cookieService.check('isLogin')) {
          this.cookieService.set('isLogin', 'true', 100000);
        }
        if (!this.cookieService.check('email')) {
          this.cookieService.set('email', this.emailRegister, 100000);
        }
        this.router.navigate(['/tabs/list']);
      }
    });
  }

}
