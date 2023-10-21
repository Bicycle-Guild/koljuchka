import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UImodules } from '../../ui-modules';
import { Subject } from '../../models/Subject';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [CommonModule, ...UImodules, RouterModule],
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.scss']
})
export class SubjectCardComponent {
  @Input() subject!: Subject;

}
