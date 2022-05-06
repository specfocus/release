"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResultFromCache = exports.canReplyWithCache = void 0;
const get_1 = __importDefault(require("lodash/get"));
const canReplyWithCache = (type, payload, resourceState) => {
    const now = new Date();
    switch (type) {
        case 'getList':
            return ((0, get_1.default)(resourceState, [
                'list',
                'cachedRequests',
                JSON.stringify(payload),
                'validity',
            ]) > now);
        case 'getOne':
            return (resourceState &&
                resourceState.validity &&
                resourceState.validity[payload.id] > now);
        case 'getMany':
            return (resourceState &&
                resourceState.validity &&
                payload.ids.every(id => resourceState.validity[id] > now));
        default:
            return false;
    }
};
exports.canReplyWithCache = canReplyWithCache;
const getResultFromCache = (type, payload, resourceState) => {
    switch (type) {
        case 'getList': {
            const data = resourceState.data;
            const requestSignature = JSON.stringify(payload);
            const cachedRequest = resourceState.list.cachedRequests[requestSignature];
            return {
                data: cachedRequest.ids.map(id => data[id]),
                total: cachedRequest.total,
            };
        }
        case 'getOne':
            return { data: resourceState.data[payload.id] };
        case 'getMany':
            return {
                data: payload.ids.map(id => resourceState.data[id]),
            };
        default:
            throw new Error('cannot reply with cache for this method');
    }
};
exports.getResultFromCache = getResultFromCache;
