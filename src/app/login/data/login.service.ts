import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoginRequest, LoginResponse} from "../api/api";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {
  }

  login(login: LoginRequest): Observable<any> {
    return this.http.post<LoginResponse>('http://localhost:3000/login/', login)
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  async redirect(): Promise<void> {
    await this.router.navigate(['/']);
  }

}
