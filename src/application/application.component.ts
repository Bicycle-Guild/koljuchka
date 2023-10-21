import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Application } from '../app/models/Application';
import { SubjectsService } from '../app/subjects.service';
import { Subject } from '../app/models/Subject';
import { Observable } from 'rxjs';
import { UImodules } from '../app/ui-modules';

type status = 'accepted' | 'declined' | 'moderation';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [CommonModule, ...UImodules],
  providers: [SubjectsService],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnInit {
  @Input() application!: Application;
  subject$!: Observable<Subject | undefined>;

  constructor(private _subjectsService: SubjectsService) {}
  ngOnInit(): void {
    if (this.application)
      this.subject$ = this._subjectsService.getSubjectByID(this.application.id);
  }
  appearanceByStatus(status: status) {
    const typeValues = {
      accepted: 'success' as const,
      declined: 'error' as const,
      moderation: 'info' as const,
    };
    return typeValues[status];
  }
}
