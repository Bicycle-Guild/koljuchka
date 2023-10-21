import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UImodules } from 'src/app/ui-modules';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, ...UImodules, ReactiveFormsModule],
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  form = new FormControl('');
}
