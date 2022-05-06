"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameRelatedTo = exports.getReferencesByIds = exports.getReferences = exports.getTotal = exports.getIds = void 0;
const actions_1 = require("../../../actions");
const core_1 = require("../../../core");
const initialState = {};
const oneToManyReducer = (previousState = initialState, action) => {
    if (action.meta && action.meta.optimistic) {
        const relatedTo = getRelatedReferences(previousState, action.meta.resource);
        if (action.meta.fetch === core_1.DELETE) {
            return relatedTo.reduce(removeDeletedReferences([action.payload.id]), previousState);
        }
        if (action.meta.fetch === core_1.DELETE_MANY) {
            return relatedTo.reduce(removeDeletedReferences(action.payload.ids), previousState);
        }
    }
    switch (action.type) {
        case actions_1.CRUD_GET_MANY_REFERENCE_SUCCESS:
            return Object.assign(Object.assign({}, previousState), { [action.meta.relatedTo]: {
                    ids: action.payload.data.map(record => record.id),
                    total: action.payload.total,
                } });
        default:
            return previousState;
    }
};
const getIds = (state, relatedTo) => state.admin.references.oneToMany[relatedTo] &&
    state.admin.references.oneToMany[relatedTo].ids;
exports.getIds = getIds;
const getTotal = (state, relatedTo) => state.admin.references.oneToMany[relatedTo] &&
    state.admin.references.oneToMany[relatedTo].total;
exports.getTotal = getTotal;
const getReferences = (state, reference, relatedTo) => {
    const ids = (0, exports.getIds)(state, relatedTo);
    if (typeof ids === 'undefined') {
        return undefined;
    }
    if (!state.admin.resources[reference]) {
        // eslint-disable-next-line no-console
        console.error(`Invalid Resource "${reference}"\n` +
            `You are trying to display or edit a field of a resource called "${reference}", ` +
            'but it has not been declared.\n' +
            "Declare this resource in the Admin or check the 'reference' prop of ReferenceArrayField and ReferenceManyField.", { ids });
    }
    return ids
        .map(id => {
        const resource = state.admin.resources[reference];
        if (!resource) {
            return undefined;
        }
        return resource.data[id];
    })
        .filter(r => typeof r !== 'undefined')
        .reduce((prev, record) => {
        prev[record.id] = record; // eslint-disable-line no-param-reassign
        return prev;
    }, {});
};
exports.getReferences = getReferences;
const getReferencesByIds = (state, reference, ids) => {
    if (ids.length === 0) {
        return {};
    }
    if (!state.admin.resources[reference]) {
        // eslint-disable-next-line no-console
        console.error(`Invalid Resource "${reference}"\n` +
            `You are trying to display or edit a field of a resource called "${reference}", ` +
            'but it has not been declared.\n' +
            "Declare this resource in the Admin or check the 'reference' prop of ReferenceArrayField.", { ids });
    }
    const references = ids
        .map(id => {
        const resource = state.admin.resources[reference];
        if (!resource) {
            return undefined;
        }
        return resource.data[id];
    })
        .filter(r => typeof r !== 'undefined')
        .reduce((prev, record) => {
        prev[record.id] = record; // eslint-disable-line no-param-reassign
        return prev;
    }, {});
    return Object.keys(references).length > 0 ? references : null;
};
exports.getReferencesByIds = getReferencesByIds;
const getRelatedReferences = (previousState, resource) => Object.keys(previousState).filter(key => key.includes(resource));
const removeDeletedReferences = (removedIds) => (previousState, key) => {
    const idsToKeep = previousState[key].ids.filter(id => !removedIds.includes(id));
    if (idsToKeep.length === previousState[key].ids.length) {
        return previousState;
    }
    return Object.assign(Object.assign({}, previousState), { [key]: {
            ids: idsToKeep,
            total: idsToKeep.length,
        } });
};
const nameRelatedTo = (reference, id, resource, target, filter = {}) => {
    const keys = Object.keys(filter);
    if (!keys.length) {
        return `${resource}_${reference}@${target}_${id}`;
    }
    return `${resource}_${reference}@${target}_${id}?${keys
        .map(key => `${key}=${JSON.stringify(filter[key])}`)
        .join('&')}`;
};
exports.nameRelatedTo = nameRelatedTo;
exports.default = oneToManyReducer;
