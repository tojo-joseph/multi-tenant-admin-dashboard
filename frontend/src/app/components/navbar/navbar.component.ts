import { Component, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-navbar',
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  user = signal({
    name: 'Lancelot',
    role: 'admin',
  });

  toggleSidenav() {}
}
