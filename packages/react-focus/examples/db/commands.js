"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const en_1 = require("faker/locale/en");
const date_fns_1 = require("date-fns");
const utils_1 = require("./utils");
exports.default = (db, { serializeDate }) => {
    const today = new Date();
    const aMonthAgo = (0, date_fns_1.subDays)(today, 30);
    const realCustomers = db.customers.filter(customer => customer.has_ordered);
    return Array.from(Array(600).keys()).map(id => {
        const nbProducts = (0, utils_1.weightedArrayElement)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [30, 20, 5, 2, 1, 1, 1, 1, 1, 1]);
        const basket = Array.from(Array(nbProducts).keys()).map(() => ({
            product_id: en_1.datatype.number({ min: 0, max: 10 * 13 - 1 }),
            quantity: (0, utils_1.weightedArrayElement)([1, 2, 3, 4, 5], [10, 5, 3, 2, 1]),
        }));
        const total_ex_taxes = basket.reduce((total, product) => total +
            db.products[product.product_id].price * product.quantity, 0);
        const delivery_fees = (0, utils_1.randomFloat)(3, 8);
        const tax_rate = en_1.random.arrayElement([0.12, 0.17, 0.2]);
        const taxes = parseFloat(((total_ex_taxes + delivery_fees) * tax_rate).toFixed(2));
        const customer = en_1.random.arrayElement(realCustomers);
        const date = (0, utils_1.randomDate)(customer.first_seen, customer.last_seen);
        const status = (0, date_fns_1.isAfter)(date, aMonthAgo) && en_1.datatype.boolean()
            ? 'ordered'
            : (0, utils_1.weightedArrayElement)(['delivered', 'cancelled'], [10, 1]);
        return {
            id,
            reference: en_1.random.alphaNumeric(6).toUpperCase(),
            date: serializeDate ? date.toISOString() : date,
            customer_id: customer.id,
            basket: basket,
            total_ex_taxes: total_ex_taxes,
            delivery_fees: delivery_fees,
            tax_rate: tax_rate,
            taxes: taxes,
            total: parseFloat((total_ex_taxes + delivery_fees + taxes).toFixed(2)),
            status: status,
            returned: status === 'delivered' ? (0, utils_1.weightedBoolean)(10) : false,
        };
    });
};
