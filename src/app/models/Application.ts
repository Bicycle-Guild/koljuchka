import { Entity } from "./Base";

export interface Application extends Entity {
    subjectId: string;
    testId: string;
    status: 'accepted' | 'declined' | 'moderation';
}