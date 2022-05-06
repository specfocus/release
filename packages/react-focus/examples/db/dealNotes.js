"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDealNotes = void 0;
const en_US_1 = require("faker/locale/en_US");
const utils_1 = require("./utils");
const type = ['Email', 'Call', 'Call', 'Call', 'Call', 'Meeting', 'Reminder'];
const generateDealNotes = (db) => {
    return Array.from(Array(300).keys()).map(id => {
        const deal = en_US_1.random.arrayElement(db.deals);
        deal.nb_notes++;
        return {
            id,
            deal_id: deal.id,
            type: en_US_1.random.arrayElement(type),
            text: en_US_1.lorem.paragraphs(en_US_1.datatype.number({ min: 1, max: 4 })),
            date: (0, utils_1.randomDate)(new Date(db.companies[deal.company_id].created_at)).toISOString(),
            sales_id: deal.sales_id,
        };
    });
};
exports.generateDealNotes = generateDealNotes;
