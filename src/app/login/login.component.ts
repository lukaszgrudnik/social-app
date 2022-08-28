import {Component} from "@angular/core";
import {LoginService} from "./data/login.service";
import {FormControl, FormGroup} from "@angular/forms";
import {LoginResponse} from "./api/api";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  message?: string;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: LoginService) {
  }

  login(): void {
    this.loginService.login(this.loginForm.value).subscribe({
      next: async (loginResponse: LoginResponse) => {
        const {token} = loginResponse;
        this.loginService.saveToken(token);
        await this.loginService.redirect();
      },
      error: () => {
        this.message = 'Invalid email or password'
      }
    })
  }
}
