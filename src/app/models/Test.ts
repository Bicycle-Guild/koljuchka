import { Entity } from "./Base";

export const enum TestType {
    Trainee = 'trainee',
    Intern = 'intern',
}

export const TEST_TYPE_LABELS = {
    [TestType.Intern]: 'Стажировка',
    [TestType.Trainee]: 'Практика',
};

export interface Test extends Entity {
    type: TestType;
    name: string;
    description: string;
    tasks: any[];
    shown: boolean;
}