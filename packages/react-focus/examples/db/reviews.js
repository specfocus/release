"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const en_1 = require("faker/locale/en");
const utils_1 = require("./utils");
exports.default = (db, { serializeDate }) => {
    const today = new Date();
    const aMonthAgo = (0, date_fns_1.subDays)(today, 30);
    let id = 0;
    const reviewers = db.customers
        .filter(customer => customer.has_ordered)
        .filter(() => (0, utils_1.weightedBoolean)(60)) // only 60% of buyers write reviews
        .map(customer => customer.id);
    return db.commands
        .filter(command => reviewers.indexOf(command.customer_id) !== -1)
        .reduce((acc, command) => [
        ...acc,
        ...command.basket
            .filter(() => (0, utils_1.weightedBoolean)(40)) // reviewers review 40% of their products
            .map(product => {
            const date = (0, utils_1.randomDate)(command.date);
            const status = (0, date_fns_1.isAfter)(aMonthAgo, date)
                ? (0, utils_1.weightedArrayElement)(['accepted', 'rejected'], [3, 1])
                : (0, utils_1.weightedArrayElement)(['pending', 'accepted', 'rejected'], [5, 3, 1]);
            return {
                id: id++,
                date: serializeDate ? date.toISOString() : date,
                status: status,
                command_id: command.id,
                product_id: product.product_id,
                customer_id: command.customer_id,
                rating: en_1.datatype.number({ min: 1, max: 5 }),
                comment: Array.apply(null, Array(en_1.datatype.number({ min: 1, max: 5 })))
                    .map(() => en_1.lorem.sentences())
                    .join('\n \r'),
            };
        }),
    ], []);
};
