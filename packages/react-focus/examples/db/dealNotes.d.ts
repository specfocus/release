import { Db } from './types';
export declare const generateDealNotes: (db: Db) => {
    id: number;
    deal_id: import("../../app").Identifier;
    type: string;
    text: string;
    date: string;
    sales_id: import("../../app").Identifier;
}[];
