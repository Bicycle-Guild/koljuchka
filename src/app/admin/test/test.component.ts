import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TestsService } from 'src/app/tests.service';
import { of, shareReplay, switchMap, take } from 'rxjs';
import { UImodules } from 'src/app/ui-modules';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TEST_TYPE_LABELS, TestType } from 'src/app/models/Test';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, ...UImodules, ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  types = [
    {
      value: TestType.Intern,
      label: TEST_TYPE_LABELS[TestType.Intern],
    },
    {
      value: TestType.Trainee,
      label: TEST_TYPE_LABELS[TestType.Trainee],
    },
  ];

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl<{ value: string; label: string } | null>(null),
  });

  test$ = this._activatedRoute.paramMap.pipe(
    switchMap((paramMap) => {
      const id = paramMap.get('testId');
      if (!id) {
        return of(undefined);
      }
      return this._testsService.getTestsByID(id);
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _testsService: TestsService
  ) {
    this.test$.pipe(take(1)).subscribe((test) => {
      console.log(test?.type || '');

      this.form.patchValue({
        name: test?.name || '',
        description: test?.description || '',
        type: test
          ? {
              value: test.type,
              label: TEST_TYPE_LABELS[test.type],
            }
          : null,
      });
    });
  }
}
