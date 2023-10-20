import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UImodules } from '../ui-modules';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...UImodules,
    HttpClientModule,
    RouterModule,
  ],
  providers: [AuthService],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  readonly form = this._fb.nonNullable.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^([A-Za-z]|\d|-|\.|_)+@([A-Za-z]|\d|-|\.|_)+$/),
        Validators.maxLength(100),
      ],
    ],
    password: ['', Validators.required],
  });
  constructor(private _fb: FormBuilder, private _authService: AuthService) {}

  login() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      this._authService.login(data.email, data.password);
    } else {
      this.form.markAllAsTouched();
    }
  }

  register() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      this._authService.register(data.email, data.password);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
