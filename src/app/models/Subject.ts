import { Entity } from "./Base";
import { Test } from "./Test";

export interface Subject extends Entity {
    name: string;
    description: string;
}