"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
exports.default = (introspectionResults) => (raFetchMethod, resource, queryType) => (response) => {
    const data = response.data;
    if (raFetchMethod === core_1.GET_LIST ||
        raFetchMethod === core_1.GET_MANY ||
        raFetchMethod === core_1.GET_MANY_REFERENCE) {
        return {
            data: response.data.items.map(sanitizeResource),
            total: response.data.total.count,
        };
    }
    return { data: sanitizeResource(data.data) };
};
const sanitizeResource = (data) => {
    const result = Object.keys(data).reduce((acc, key) => {
        if (key.startsWith('_')) {
            return acc;
        }
        const dataKey = data[key];
        if (dataKey === null || dataKey === undefined) {
            return acc;
        }
        if (Array.isArray(dataKey)) {
            if (typeof dataKey[0] === 'object' && dataKey[0] !== null) {
                return Object.assign(Object.assign({}, acc), { [key]: dataKey.map(sanitizeResource), [`${key}Ids`]: dataKey.map(d => d.id) });
            }
            else {
                return Object.assign(Object.assign({}, acc), { [key]: dataKey });
            }
        }
        if (typeof dataKey === 'object' && dataKey !== null) {
            return Object.assign(Object.assign(Object.assign({}, acc), (dataKey &&
                dataKey.id && {
                [`${key}.id`]: dataKey.id,
            })), { [key]: sanitizeResource(dataKey) });
        }
        return Object.assign(Object.assign({}, acc), { [key]: dataKey });
    }, {});
    return result;
};
