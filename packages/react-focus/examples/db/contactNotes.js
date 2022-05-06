"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateContactNotes = void 0;
const en_US_1 = require("faker/locale/en_US");
const utils_1 = require("./utils");
const type = ['Email', 'Call', 'Call', 'Call', 'Call', 'Meeting', 'Reminder'];
const status = ['cold', 'cold', 'cold', 'warm', 'warm', 'hot', 'in-contract'];
const generateContactNotes = (db) => {
    return Array.from(Array(1200).keys()).map(id => {
        const contact = en_US_1.random.arrayElement(db.contacts);
        const date = (0, utils_1.randomDate)(new Date(contact.first_seen)).toISOString();
        contact.nb_notes++;
        contact.last_seen = date > contact.last_seen ? date : contact.last_seen;
        return {
            id,
            contact_id: contact.id,
            type: en_US_1.random.arrayElement(type),
            text: en_US_1.lorem.paragraphs(en_US_1.datatype.number({ min: 1, max: 4 })),
            date,
            sales_id: contact.sales_id,
            status: en_US_1.random.arrayElement(status),
        };
    });
};
exports.generateContactNotes = generateContactNotes;
