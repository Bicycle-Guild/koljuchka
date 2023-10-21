import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UImodules } from '../ui-modules';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { applications } from '../mocks/applications';
import { ApplicationComponent } from 'src/application/application.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ...UImodules, ReactiveFormsModule, ApplicationComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  readonly educationTypes = ['Бакалавриат', 'Среднеспециальное', 'Магистратура', 'Нет'];
  readonly testForm = new FormGroup({
    name: new FormControl('Иванов Иван Иваныч'),
    age: new FormControl(21),
    link: new FormControl('https://aboba.ru'),
    education: new FormControl('Бакалавриат'),
  });
  readonly applications = applications;
}
