import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UImodules } from 'src/app/ui-modules';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from 'src/app/tasks.service';
import { TASK_TYPE_LABELS, Task, TaskType } from 'src/app/models/Task';
import { map, takeUntil } from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, ...UImodules, ReactiveFormsModule],
  providers: [TasksService, TuiDestroyService],
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.scss'],
})
export class TaskEditComponent implements OnChanges {
  @Input({ required: true }) task!: Partial<Task>;

  @Output() changed = new EventEmitter<Partial<Task>>();

  readonly types = [
    {
      value: TaskType.SINGLE,
      label: TASK_TYPE_LABELS[TaskType.SINGLE],
    },
    {
      value: TaskType.FULL,
      label: TASK_TYPE_LABELS[TaskType.FULL],
    },
  ];

  form = this._fb.group({
    name: '',
    description: '',
    type: this.types[0],
    correct: null as string | null,
  });

  answers: FormControl[] = [];

  type$ = this.form.valueChanges.pipe(map((e) => e.type?.value));

  constructor(private readonly _fb: FormBuilder, destroy$: TuiDestroyService) {
    for (const name in this.form.controls) {
      this.form
        .get(name)
        ?.valueChanges.pipe(takeUntil(destroy$))
        .subscribe((value) => {
          if (name === 'type') {
            this.changed.emit({ [name]: value.value });
          } else {
            this.changed.emit({ [name]: value });
          }
        });
    }
  }

  ngOnChanges() {
    this._fillForm(this.task);
  }

  private _fillForm(task: Partial<Task>) {
    this.form.patchValue(
      {
        name: task.name,
        description: task.description,
        type: task?.type
          ? { value: task.type, label: TASK_TYPE_LABELS[task.type] }
          : undefined,
      },
      { emitEvent: false }
    );
    this.answers = (this.task.answers || []).map((answer) =>
      this._fb.control(answer)
    );
  }
}
