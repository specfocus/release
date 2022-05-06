"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTasks = void 0;
const en_US_1 = require("faker/locale/en_US");
const utils_1 = require("./utils");
const type = [
    'Email',
    'Email',
    'Email',
    'Email',
    'Email',
    'Email',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Call',
    'Demo',
    'Lunch',
    'Meeting',
    'Follow-up',
    'Follow-up',
    'Thank you',
    'Ship',
    'None',
];
const generateTasks = (db) => {
    return Array.from(Array(400).keys()).map(id => {
        const contact = en_US_1.random.arrayElement(db.contacts);
        return {
            id,
            contact_id: contact.id,
            type: en_US_1.random.arrayElement(type),
            text: en_US_1.lorem.sentence(),
            due_date: (0, utils_1.randomDate)(new Date(contact.first_seen)),
            sales_id: contact.sales_id,
        };
    });
};
exports.generateTasks = generateTasks;
