import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Application } from 'src/app/models/Application';
import { SubjectsService } from 'src/app/subjects.service';
import { Subject } from 'src/app/models/Subject';
import { Observable } from 'rxjs';
import { UImodules } from 'src/app/ui-modules';

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
}
