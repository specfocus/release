"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const en_1 = require("faker/locale/en");
const utils_1 = require("./utils");
exports.default = (db, { serializeDate }) => {
    // This is the total number of people pictures available. We only use those pictures for actual customers
    const maxCustomers = 223;
    let numberOfCustomers = 0;
    return Array.from(Array(900).keys()).map(id => {
        const first_seen = (0, utils_1.randomDate)();
        const last_seen = (0, utils_1.randomDate)(first_seen);
        const has_ordered = (0, utils_1.weightedBoolean)(25) && numberOfCustomers < maxCustomers;
        const first_name = en_1.name.firstName();
        const last_name = en_1.name.lastName();
        const email = en_1.internet.email(first_name, last_name);
        const birthday = has_ordered ? en_1.date.past(60) : null;
        const avatar = has_ordered
            ? 'https://marmelab.com/posters/avatar-' +
                numberOfCustomers +
                '.jpeg'
            : undefined;
        if (has_ordered) {
            numberOfCustomers++;
        }
        return {
            id,
            first_name,
            last_name,
            email,
            address: has_ordered ? en_1.address.streetAddress() : null,
            zipcode: has_ordered ? en_1.address.zipCode() : null,
            city: has_ordered ? en_1.address.city() : null,
            stateAbbr: has_ordered ? en_1.address.stateAbbr() : null,
            avatar,
            birthday: serializeDate && birthday ? birthday.toISOString() : birthday,
            first_seen: serializeDate ? first_seen.toISOString() : first_seen,
            last_seen: serializeDate ? last_seen.toISOString() : last_seen,
            has_ordered: has_ordered,
            latest_purchase: null,
            has_newsletter: has_ordered ? (0, utils_1.weightedBoolean)(30) : true,
            groups: [],
            nb_commands: 0,
            total_spent: 0,
        };
    });
};
