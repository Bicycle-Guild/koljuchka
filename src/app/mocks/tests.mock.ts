import { Test, TestType } from '../models/Test';

export const testsMock: Test[] = [
  {
    id: '123123',
    type: TestType.Trainee,
    name: 'Практика 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at ab eveniet doloremque ducimus atque fugiat eos, expedita suscipit dicta architecto, harum facilis delectus, ex sequi quod vero voluptatem ut!',
    shown: true,
    tasks: [],
  },
  {
    id: '123124',
    type: TestType.Intern,
    name: 'Стажировка 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    shown: true,
    tasks: [],
  },
  {
    id: '123124',
    type: TestType.Intern,
    name: 'Стажировка 2',
    description:
      'Consectetur at ab eveniet doloremque ducimus atque fugiat eos, expedita suscipit dicta architecto, harum facilis delectus, ex sequi quod vero voluptatem ut!',
    shown: false,
    tasks: [],
  },
];
