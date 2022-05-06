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
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../../../../actions");
const core_1 = require("../../../../core");
const initialState = {};
const validityReducer = (previousState = initialState, { type, payload, requestPayload, meta }) => {
    if (type === actions_1.REFRESH_VIEW) {
        return initialState;
    }
    if (!meta ||
        !meta.fetchResponse ||
        meta.fetchStatus !== actions_1.FETCH_END ||
        meta.fromCache === true) {
        return previousState;
    }
    switch (meta.fetchResponse) {
        case core_1.GET_LIST: {
            if (payload.validUntil) {
                // store the validity date
                return Object.assign(Object.assign({}, previousState), { [JSON.stringify(requestPayload)]: payload.validUntil });
            }
            else {
                // remove the validity date
                const _a = previousState, _b = JSON.stringify(requestPayload), value = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            }
        }
        case core_1.CREATE:
            // force refresh of all lists because we don't know where the
            // new record will appear in the list
            return initialState;
        default:
            return previousState;
    }
};
exports.default = validityReducer;
