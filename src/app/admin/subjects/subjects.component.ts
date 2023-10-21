import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UImodules } from 'src/app/ui-modules';
import { SubjectCardComponent } from '../subject-card/subject-card.component';
import { Subject } from '../../models/Subject';
import { SubjectsService } from 'src/app/subjects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule, ...UImodules, SubjectCardComponent],
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent {
  subjects$: Observable<Subject[]> = this._subjectsService.getSubjects();

  constructor(private readonly _subjectsService: SubjectsService) {}
}
