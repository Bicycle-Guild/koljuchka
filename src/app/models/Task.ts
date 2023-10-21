import { Entity } from './Base';

export const enum TaskType {
  SINGLE = 'single',
  FULL = 'full',
}

export const TASK_TYPE_LABELS = {
  [TaskType.SINGLE]: 'Один ответ',
  [TaskType.FULL]: 'Развёрнутый ответ',
};

export interface Task extends Entity {
  name: string;
  description: string;
  type: TaskType;
  answers: string[];
  correct: string[];
}
