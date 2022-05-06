"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDeals = void 0;
const date_fns_1 = require("date-fns");
const en_US_1 = require("faker/locale/en_US");
const utils_1 = require("./utils");
const type = [
    'Other',
    'Copywriting',
    'Print project',
    'UI Design',
    'Website design',
];
const stages = [
    'opportunity',
    'proposal-sent',
    'in-negociation',
    'won',
    'lost',
    'delayed',
];
//const tags = ["new deal", "upsell", "SAV"];
const generateDeals = (db) => {
    const deals = Array.from(Array(50).keys()).map(id => {
        const company = en_US_1.random.arrayElement(db.companies);
        company.nb_deals++;
        const contacts = en_US_1.random.arrayElements(db.contacts.filter(contact => contact.company_id === company.id), en_US_1.datatype.number({ min: 1, max: 3 }));
        const lowercaseName = en_US_1.lorem.words();
        const created_at = (0, utils_1.randomDate)(new Date(company.created_at)).toISOString();
        return {
            id,
            name: lowercaseName[0].toUpperCase() + lowercaseName.slice(1),
            company_id: company.id,
            contact_ids: contacts.map(contact => contact.id),
            type: en_US_1.random.arrayElement(type),
            stage: en_US_1.random.arrayElement(stages),
            description: en_US_1.lorem.paragraphs(en_US_1.datatype.number({ min: 1, max: 4 })),
            amount: en_US_1.datatype.number(1000) * 100,
            created_at: created_at,
            updated_at: (0, utils_1.randomDate)(new Date(created_at)).toISOString(),
            start_at: (0, utils_1.randomDate)(new Date(), (0, date_fns_1.add)(new Date(), { months: 6 })).toISOString(),
            sales_id: company.sales_id,
            index: 0,
            nb_notes: 0,
        };
    });
    // compute index based on stage
    stages.forEach(stage => {
        deals
            .filter(deal => deal.stage === stage)
            .forEach((deal, index) => {
            deals[deal.id].index = index;
        });
    });
    return deals;
};
exports.generateDeals = generateDeals;
