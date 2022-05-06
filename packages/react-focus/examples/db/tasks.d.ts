import { Db } from './types';
export declare const generateTasks: (db: Db) => {
    id: number;
    contact_id: import("../../app").Identifier;
    type: string;
    text: string;
    due_date: Date;
    sales_id: import("../../app").Identifier;
}[];
