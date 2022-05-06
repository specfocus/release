"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQuery = void 0;
const merge_1 = __importDefault(require("lodash/merge"));
const build_1 = __importDefault(require("./build"));
const buildQuery_1 = __importDefault(require("./buildQuery"));
const defaultOptions = {
    buildQuery: buildQuery_1.default,
};
exports.buildQuery = buildQuery_1.default;
exports.default = (options) => {
    return (0, build_1.default)((0, merge_1.default)({}, defaultOptions, options)).then(defaultDataProvider => {
        return Object.assign(Object.assign({}, defaultDataProvider), { 
            // This provider does not support multiple deletions so instead we send multiple DELETE requests
            // This can be optimized using the apollo-link-batch-http link
            deleteMany: (resource, params) => {
                const { ids } = params, otherParams = __rest(params, ["ids"]);
                return Promise.all(ids.map(id => defaultDataProvider.delete(resource, Object.assign({ id, previousData: null }, otherParams)))).then(results => {
                    const data = results.reduce((acc, { data }) => [...acc, data.id], []);
                    return { data };
                });
            }, 
            // This provider does not support multiple deletions so instead we send multiple UPDATE requests
            // This can be optimized using the apollo-link-batch-http link
            updateMany: (resource, params) => {
                const { ids, data } = params, otherParams = __rest(params, ["ids", "data"]);
                return Promise.all(ids.map(id => defaultDataProvider.update(resource, Object.assign({ id, data: data, previousData: null }, otherParams)))).then(results => {
                    const data = results.reduce((acc, { data }) => [...acc, data.id], []);
                    return { data };
                });
            } });
    });
};
