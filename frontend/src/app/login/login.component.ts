import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  @Output() formSubmitted = new EventEmitter<{
    username: string;
    password: string;
  }>();

  submitForm() {
    this.formSubmitted.emit({
      username: this.username,
      password: this.password,
    });
  }
}
