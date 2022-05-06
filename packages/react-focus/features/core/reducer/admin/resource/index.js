"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferenceResource = exports.getResources = void 0;
const actions_1 = require("../../../actions");
const data_1 = __importDefault(require("./data"));
const list_1 = __importDefault(require("./list"));
const validity_1 = __importDefault(require("./validity"));
const initialState = {};
exports.default = (previousState = initialState, action) => {
    if (action.type === actions_1.REGISTER_RESOURCE) {
        const resourceState = {
            props: action.payload,
            data: (0, data_1.default)(undefined, action),
            list: (0, list_1.default)(undefined, action),
            validity: (0, validity_1.default)(undefined, action),
        };
        console.log('REGISTER_RESOURCE', action.payload.name);
        return Object.assign(Object.assign({}, previousState), { [action.payload.name]: resourceState });
    }
    if (action.type === actions_1.UNREGISTER_RESOURCE) {
        return Object.keys(previousState).reduce((acc, key) => {
            if (key === action.payload) {
                return acc;
            }
            return Object.assign(Object.assign({}, acc), { [key]: previousState[key] });
        }, {});
    }
    if (action.type !== actions_1.REFRESH_VIEW &&
        (!action.meta || !action.meta.resource)) {
        return previousState;
    }
    const resources = Object.keys(previousState);
    const newState = resources.reduce((acc, resource) => (Object.assign(Object.assign({}, acc), { [resource]: action.type === actions_1.REFRESH_VIEW ||
            action.meta.resource === resource
            ? {
                props: previousState[resource].props,
                data: (0, data_1.default)(previousState[resource].data, action),
                list: (0, list_1.default)(previousState[resource].list, action),
                validity: (0, validity_1.default)(previousState[resource].validity, action),
            }
            : previousState[resource] })), {});
    return newState;
};
const getResources = state => Object.keys(state).map(key => state[key].props);
exports.getResources = getResources;
const getReferenceResource = (state, props) => state[props.reference];
exports.getReferenceResource = getReferenceResource;
