"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSales = void 0;
const en_US_1 = require("faker/locale/en_US");
const generateSales = (db) => {
    const randomSales = Array.from(Array(10).keys()).map(id => {
        const first_name = en_US_1.name.firstName();
        const last_name = en_US_1.name.lastName();
        const email = en_US_1.internet.email(first_name, last_name);
        return {
            id: id + 1,
            first_name,
            last_name,
            email,
        };
    });
    return [
        {
            id: 0,
            first_name: 'Jane',
            last_name: 'Doe',
            email: 'janedoe@atomic.dev',
        },
        ...randomSales,
    ];
};
exports.generateSales = generateSales;
