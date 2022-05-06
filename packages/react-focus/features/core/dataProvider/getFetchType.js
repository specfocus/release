"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
/**
 * Get a fetch type for a data provider verb.
 *
 * The fetch type is used in reducers.
 *
 * @example getFetchType('getMany'); // 'GET_MANY'
 */
exports.default = actionType => {
    switch (actionType) {
        case 'getList':
            return __1.GET_LIST;
        case 'getOne':
            return __1.GET_ONE;
        case 'getMany':
            return __1.GET_MANY;
        case 'getManyReference':
            return __1.GET_MANY_REFERENCE;
        case 'create':
            return __1.CREATE;
        case 'update':
            return __1.UPDATE;
        case 'updateMany':
            return __1.UPDATE_MANY;
        case 'delete':
            return __1.DELETE;
        case 'deleteMany':
            return __1.DELETE_MANY;
        default:
            return actionType;
    }
};
