import { Answer } from "./Answer";
import { Entity } from "./Base";

export interface Task extends Entity {
    title: string;
    description: string;
    type: 'multi' | 'single' | 'full';
    answers: Answer[]; 
}