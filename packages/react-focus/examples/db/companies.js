"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCompanies = void 0;
const en_US_1 = require("faker/locale/en_US");
const utils_1 = require("./utils");
const sectors = [
    'Communication Services',
    'Consumer Discretionary',
    'Consumer Staples',
    'Energy',
    'Financials',
    'Health Care',
    'Industrials',
    'Information Technology',
    'Materials',
    'Real Estate',
    'Utilities',
];
const sizes = [1, 10, 50, 250, 500];
const regex = /\W+/;
const generateCompanies = (db) => {
    return Array.from(Array(55).keys()).map(id => {
        const name = en_US_1.company.companyName();
        return {
            id,
            name: name,
            logo: `/logos/${id}.png`,
            sector: en_US_1.random.arrayElement(sectors),
            size: en_US_1.random.arrayElement(sizes),
            linkedIn: `https://www.linkedin.com/company/${name
                .toLowerCase()
                .replace(regex, '_')}`,
            website: en_US_1.internet.url(),
            phone_number: en_US_1.phone.phoneNumber(),
            address: en_US_1.address.streetAddress(),
            zipcode: en_US_1.address.zipCode(),
            city: en_US_1.address.city(),
            stateAbbr: en_US_1.address.stateAbbr(),
            nb_contacts: 0,
            nb_deals: 0,
            // at least 1/3rd of companies for Jane Doe
            sales_id: en_US_1.datatype.number(2) === 0 ? 0 : en_US_1.random.arrayElement(db.sales).id,
            created_at: (0, utils_1.randomDate)().toISOString(),
        };
    });
};
exports.generateCompanies = generateCompanies;
