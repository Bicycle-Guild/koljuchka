import { Entity } from "./Base";

export interface Test extends Entity {
    description: string;
    tasks: any[];
}