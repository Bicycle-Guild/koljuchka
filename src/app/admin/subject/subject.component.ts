import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UImodules } from 'src/app/ui-modules';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, shareReplay, switchMap, take } from 'rxjs';
import { SubjectsService } from 'src/app/subjects.service';
import { TestCardComponent } from '../test-card/test-card.component';
import { TestsService } from 'src/app/tests.service';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, ...UImodules, ReactiveFormsModule, TestCardComponent],
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  subject$ = this._activatrdRoute.paramMap.pipe(
    switchMap((paramMap) => {
      const id = paramMap.get('id');
      if (!id) {
        return of(undefined);
      }
      return this._subjectsService.getSubjectByID(id);
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  tests$ = this.subject$.pipe(
    switchMap((subject) => {
      if (!subject) {
        return of([]);
      }
      return this._testsService.getTestsBySubjectId(subject.id);
    })
  );

  constructor(
    private readonly _activatrdRoute: ActivatedRoute,
    private readonly _subjectsService: SubjectsService,
    private readonly _testsService: TestsService
  ) {
    this.subject$.pipe(take(1)).subscribe((subject) => {
      this.form.patchValue({
        name: subject?.name || '',
        description: subject?.description || '',
      });
    });
  }
}
