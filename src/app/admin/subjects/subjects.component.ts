import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UImodules } from 'src/app/ui-modules';
import { SubjectCardComponent } from '../subject-card/subject-card.component';
import { subjectCards } from '../../mocks/subject-cards';
import { Subject } from '../../models/Subject';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule, ...UImodules, SubjectCardComponent],
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  cards: Subject[] = subjectCards;
}
