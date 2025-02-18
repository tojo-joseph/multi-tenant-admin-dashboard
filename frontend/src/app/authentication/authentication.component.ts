import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-authentication',
  imports: [SharedModule, LoginComponent, SignupComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent {}
