"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const getFinalType_1 = __importDefault(require("./getFinalType"));
const isList_1 = __importDefault(require("./isList"));
exports.default = (introspectionResults) => (resource, raFetchMethod, params, queryType) => {
    const preparedParams = prepareParams(params, queryType, introspectionResults);
    switch (raFetchMethod) {
        case core_1.GET_LIST: {
            return buildGetListVariables(introspectionResults)(resource, raFetchMethod, preparedParams);
        }
        case core_1.GET_MANY:
            return {
                filter: { ids: preparedParams.ids },
            };
        case core_1.GET_MANY_REFERENCE: {
            let variables = buildGetListVariables(introspectionResults)(resource, raFetchMethod, preparedParams);
            variables.filter = Object.assign(Object.assign({}, variables.filter), { [preparedParams.target]: preparedParams.id });
            return variables;
        }
        case core_1.GET_ONE:
        case core_1.DELETE:
            return {
                id: preparedParams.id,
            };
        case core_1.CREATE:
        case core_1.UPDATE: {
            return buildCreateUpdateVariables(resource, raFetchMethod, preparedParams, queryType);
        }
    }
};
const sanitizeValue = (type, value) => {
    if (type.name === 'Int') {
        return parseInt(value, 10);
    }
    if (type.name === 'Float') {
        return parseFloat(value);
    }
    return value;
};
const castType = (value, type) => {
    const realType = type.kind === 'NON_NULL' ? type.ofType : type;
    switch (`${realType.kind}:${realType.name}`) {
        case 'SCALAR:Int':
            return Number(value);
        case 'SCALAR:String':
            return String(value);
        case 'SCALAR:Boolean':
            return Boolean(value);
        default:
            return value;
    }
};
const prepareParams = (params, queryType, introspectionResults) => {
    const result = {};
    if (!params) {
        return params;
    }
    Object.keys(params).forEach(key => {
        const param = params[key];
        let arg = null;
        if (!param) {
            result[key] = param;
            return;
        }
        if (queryType && Array.isArray(queryType.args)) {
            arg = queryType.args.find(item => item.name === key);
        }
        if (param instanceof File) {
            result[key] = param;
            return;
        }
        if (param instanceof Date) {
            result[key] = param.toISOString();
            return;
        }
        if (param instanceof Object &&
            !Array.isArray(param) &&
            arg &&
            arg.type.kind === 'INPUT_OBJECT') {
            const args = introspectionResults.types.find(item => item.kind === arg.type.kind && item.name === arg.type.name).inputFields;
            result[key] = prepareParams(param, { args }, introspectionResults);
            return;
        }
        if (param instanceof Object &&
            !(param instanceof Date) &&
            !Array.isArray(param)) {
            result[key] = prepareParams(param, queryType, introspectionResults);
            return;
        }
        if (!arg) {
            result[key] = param;
            return;
        }
        result[key] = castType(param, arg.type);
    });
    return result;
};
const buildGetListVariables = (introspectionResults) => (resource, raFetchMethod, params) => {
    let variables = { filter: {} };
    if (params.filter) {
        variables.filter = Object.keys(params.filter).reduce((acc, key) => {
            var _a, _b, _c, _d;
            if (key === 'ids') {
                return Object.assign(Object.assign({}, acc), { ids: params.filter[key] });
            }
            if (typeof params.filter[key] === 'object') {
                const type = introspectionResults.types.find(t => t.name === `${resource.type.name}Filter`);
                const filterSome = (_b = (_a = type) === null || _a === void 0 ? void 0 : _a.inputFields) === null || _b === void 0 ? void 0 : _b.find(t => t.name === `${key}_some`);
                if (filterSome) {
                    const filter = Object.keys(params.filter[key]).reduce((acc, k) => (Object.assign(Object.assign({}, acc), { [`${k}_in`]: params.filter[key][k] })), {});
                    return Object.assign(Object.assign({}, acc), { [`${key}_some`]: filter });
                }
            }
            const parts = key.split('.');
            if (parts.length > 1) {
                if (parts[1] === 'id') {
                    const type = introspectionResults.types.find(t => t.name === `${resource.type.name}Filter`);
                    const filterSome = (_d = (_c = type) === null || _c === void 0 ? void 0 : _c.inputFields) === null || _d === void 0 ? void 0 : _d.find(t => t.name === `${parts[0]}_some`);
                    if (filterSome) {
                        return Object.assign(Object.assign({}, acc), { [`${parts[0]}_some`]: { id: params.filter[key] } });
                    }
                    return Object.assign(Object.assign({}, acc), { [parts[0]]: { id: params.filter[key] } });
                }
                const resourceField = resource.type.fields.find(f => f.name === parts[0]);
                const type = (0, getFinalType_1.default)(resourceField.type);
                return Object.assign(Object.assign({}, acc), { [key]: sanitizeValue(type, params.filter[key]) });
            }
            const resourceField = resource.type.fields.find(f => f.name === key);
            if (resourceField) {
                const type = (0, getFinalType_1.default)(resourceField.type);
                const isAList = (0, isList_1.default)(resourceField.type);
                if (isAList) {
                    return Object.assign(Object.assign({}, acc), { [key]: Array.isArray(params.filter[key])
                            ? params.filter[key].map(value => sanitizeValue(type, value))
                            : sanitizeValue(type, [params.filter[key]]) });
                }
                return Object.assign(Object.assign({}, acc), { [key]: sanitizeValue(type, params.filter[key]) });
            }
            return Object.assign(Object.assign({}, acc), { [key]: params.filter[key] });
        }, {});
    }
    if (params.pagination) {
        variables.page = parseInt(params.pagination.page, 10) - 1;
        variables.perPage = parseInt(params.pagination.perPage, 10);
    }
    if (params.sort) {
        variables.sortField = params.sort.field;
        variables.sortOrder = params.sort.order;
    }
    return variables;
};
const buildCreateUpdateVariables = (resource, raFetchMethod, params, queryType) => Object.keys(params.data).reduce((acc, key) => {
    if (Array.isArray(params.data[key])) {
        const arg = queryType.args.find(a => a.name === `${key}Ids`);
        if (arg) {
            return Object.assign(Object.assign({}, acc), { [`${key}Ids`]: params.data[key].map(({ id }) => id) });
        }
    }
    if (typeof params.data[key] === 'object') {
        const arg = queryType.args.find(a => a.name === `${key}Id`);
        if (arg) {
            return Object.assign(Object.assign({}, acc), { [`${key}Id`]: params.data[key].id });
        }
    }
    return Object.assign(Object.assign({}, acc), { [key]: params.data[key] });
}, {});
