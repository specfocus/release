"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerWithCache = void 0;
const replyWithCache_1 = require("../replyWithCache");
const getFetchType_1 = __importDefault(require("../getFetchType"));
const fetchActions_1 = require("../../actions/fetchActions");
const answerWithCache = ({ type, payload, resource, action, rest, onSuccess, resourceState, dispatch, }) => {
    dispatch({
        type: action,
        payload,
        meta: Object.assign({ resource }, rest),
    });
    const response = (0, replyWithCache_1.getResultFromCache)(type, payload, resourceState);
    dispatch({
        type: `${action}_SUCCESS`,
        payload: response,
        requestPayload: payload,
        meta: Object.assign(Object.assign({}, rest), { resource, fetchResponse: (0, getFetchType_1.default)(type), fetchStatus: fetchActions_1.FETCH_END, fromCache: true }),
    });
    onSuccess && onSuccess(response);
    return Promise.resolve(response);
};
exports.answerWithCache = answerWithCache;
