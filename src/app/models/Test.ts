import { Entity } from "./Base";

export interface Test extends Entity {
    description: string;
    shown: boolean;
    type: 'intern' | 'trainee';
    tasks: any[];
}