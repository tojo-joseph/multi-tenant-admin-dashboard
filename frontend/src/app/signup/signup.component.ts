import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-signup',
  imports: [SharedModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  @Output() signupFormSubmitted = new EventEmitter<{
    username: string;
    password: string;
  }>();

  submitForm() {
    console.log('Username', this.username, this.password);
    this.signupFormSubmitted.emit({
      username: this.username,
      password: this.password,
    });
  }
}
