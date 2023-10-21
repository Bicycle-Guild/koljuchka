import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UImodules } from '../ui-modules';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ...UImodules, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
}
