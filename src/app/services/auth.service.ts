import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private emailLogin: string;
  private passwordLogin: string;

  private userNameRegister: string;
  private emailRegister: string;
  private passwordRegister: string;
  private subjectLogin = new Subject<boolean>();
  private subjectRegister = new Subject<boolean>();
  constructor(private httpClient: HttpClient) {}

  set setEmailLogin(email: string) {
    this.emailLogin = email;
  }
  set setPasswordLogin(password: string) {
    this.passwordLogin = password;
  }
  set setUserNameRegister(userName: string) {
    this.userNameRegister = userName;
  }
  set setEmailRegister(email: string) {
    this.emailRegister = email;
  }
  set setPasswordRegister(password: string) {
    this.passwordRegister = password;
  }

  get isLogin(): Observable<boolean> {
    return this.subjectLogin.asObservable();
  }

  get isRegister(): Observable<boolean> {
    return this.subjectRegister.asObservable();
  }

  public register(userName: string, email: string, password: string) {
    this.httpClient.post<{status}>(environment.REGISTER_URL, {userName, email, password}, {observe: 'response'}).subscribe(response => {
      if (response.body.status === 'ok') {
        this.subjectRegister.next(true);
      }
    });
  }
  public login(email: string, password: string) {
    this.httpClient.post<{status}>(environment.LOGIN_URL, {email, password}, {observe: 'response'}).subscribe(response => {
      console.log(response.body.status);
      if (response.body.status === 'ok') {
        this.subjectLogin.next(true);
      }
    });
  }
}
