import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  tenantName = 'Default Tenant';
  user = { name: 'John Doe', role: 'Admin' };

  tenants = [
    { id: 1, name: 'Tenant A' },
    { id: 2, name: 'Tenant B' },
    { id: 3, name: 'Tenant C' },
  ];

  selectTenant(tenant: any) {
    this.tenantName = tenant.name;
  }
}
