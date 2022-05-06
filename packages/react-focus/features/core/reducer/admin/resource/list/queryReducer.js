"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HIDE_FILTER = exports.SHOW_FILTER = exports.SET_FILTER = exports.SET_PER_PAGE = exports.SET_PAGE = exports.SORT_DESC = exports.SORT_ASC = exports.SET_SORT = void 0;
const set_1 = __importDefault(require("lodash/set"));
const removeEmpty_1 = __importDefault(require("../../../../util/removeEmpty"));
const removeKey_1 = __importDefault(require("../../../../util/removeKey"));
exports.SET_SORT = 'SET_SORT';
exports.SORT_ASC = 'ASC';
exports.SORT_DESC = 'DESC';
exports.SET_PAGE = 'SET_PAGE';
exports.SET_PER_PAGE = 'SET_PER_PAGE';
exports.SET_FILTER = 'SET_FILTER';
exports.SHOW_FILTER = 'SHOW_FILTER';
exports.HIDE_FILTER = 'HIDE_FILTER';
const oppositeOrder = direction => direction === exports.SORT_DESC ? exports.SORT_ASC : exports.SORT_DESC;
/**
 * This reducer is for the react-router query string, NOT for redux.
 */
const queryReducer = (previousState, action) => {
    switch (action.type) {
        case exports.SET_SORT:
            if (action.payload.sort === previousState.sort) {
                return Object.assign(Object.assign({}, previousState), { order: oppositeOrder(previousState.order), page: 1 });
            }
            return Object.assign(Object.assign({}, previousState), { sort: action.payload.sort, order: action.payload.order || exports.SORT_ASC, page: 1 });
        case exports.SET_PAGE:
            return Object.assign(Object.assign({}, previousState), { page: action.payload });
        case exports.SET_PER_PAGE:
            return Object.assign(Object.assign({}, previousState), { page: 1, perPage: action.payload });
        case exports.SET_FILTER: {
            return Object.assign(Object.assign({}, previousState), { page: 1, filter: action.payload.filter, displayedFilters: action.payload.displayedFilters
                    ? action.payload.displayedFilters
                    : previousState.displayedFilters });
        }
        case exports.SHOW_FILTER: {
            if (previousState.displayedFilters &&
                previousState.displayedFilters[action.payload.filterName]) {
                // the filter is already shown
                return previousState;
            }
            return Object.assign(Object.assign({}, previousState), { filter: typeof action.payload.defaultValue !== 'undefined'
                    ? (0, set_1.default)(previousState.filter, action.payload.filterName, action.payload.defaultValue)
                    : previousState.filter, 
                // we don't use lodash.set() for displayed filters
                // to avoid problems with compound filter names (e.g. 'author.name')
                displayedFilters: Object.assign(Object.assign({}, previousState.displayedFilters), { [action.payload.filterName]: true }) });
        }
        case exports.HIDE_FILTER: {
            return Object.assign(Object.assign({}, previousState), { filter: (0, removeEmpty_1.default)((0, removeKey_1.default)(previousState.filter, action.payload)), 
                // we don't use lodash.set() for displayed filters
                // to avoid problems with compound filter names (e.g. 'author.name')
                displayedFilters: previousState.displayedFilters
                    ? Object.keys(previousState.displayedFilters).reduce((filters, filter) => {
                        return filter !== action.payload
                            ? Object.assign(Object.assign({}, filters), { [filter]: true }) : filters;
                    }, {})
                    : previousState.displayedFilters });
        }
        default:
            return previousState;
    }
};
exports.default = queryReducer;
