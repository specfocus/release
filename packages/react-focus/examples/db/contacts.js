"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateContacts = void 0;
const en_US_1 = require("faker/locale/en_US");
const utils_1 = require("./utils");
const genders = ['male', 'female'];
const status = ['cold', 'cold', 'cold', 'warm', 'warm', 'hot', 'in-contract'];
const maxContacts = {
    1: 1,
    10: 4,
    50: 12,
    250: 25,
    500: 50,
};
const generateContacts = (db) => {
    const nbAvailblePictures = 223;
    let numberOfContacts = 0;
    return Array.from(Array(500).keys()).map(id => {
        const has_avatar = (0, utils_1.weightedBoolean)(25) && numberOfContacts < nbAvailblePictures;
        const gender = en_US_1.random.arrayElement(genders);
        const first_name = en_US_1.name.firstName(gender);
        const last_name = en_US_1.name.lastName();
        const email = en_US_1.internet.email(first_name, last_name);
        const avatar = has_avatar
            ? 'https://marmelab.com/posters/avatar-' +
                (223 - numberOfContacts) +
                '.jpeg'
            : undefined;
        const title = en_US_1.company.bsAdjective();
        if (has_avatar) {
            numberOfContacts++;
        }
        // choose company with people left to know
        let company;
        do {
            company = en_US_1.random.arrayElement(db.companies);
        } while (company.nb_contacts >= maxContacts[company.size]);
        company.nb_contacts++;
        const first_seen = (0, utils_1.randomDate)(new Date(company.created_at)).toISOString();
        const last_seen = first_seen;
        return {
            id,
            first_name,
            last_name,
            gender,
            title: title.charAt(0).toUpperCase() + title.substr(1),
            company_id: company.id,
            email,
            phone_number1: en_US_1.phone.phoneNumber(),
            phone_number2: en_US_1.phone.phoneNumber(),
            background: en_US_1.lorem.sentence(),
            acquisition: en_US_1.random.arrayElement(['inbound', 'outbound']),
            avatar,
            first_seen: first_seen,
            last_seen: last_seen,
            has_newsletter: (0, utils_1.weightedBoolean)(30),
            status: en_US_1.random.arrayElement(status),
            tags: en_US_1.random
                .arrayElements(db.tags, en_US_1.random.arrayElement([0, 0, 0, 1, 1, 2]))
                .map(tag => tag.id),
            sales_id: company.sales_id,
            nb_notes: 0,
        };
    });
};
exports.generateContacts = generateContacts;
