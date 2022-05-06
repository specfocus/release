"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPossibleReferences = exports.getPossibleReferenceValues = void 0;
const dataActions_1 = require("../../../actions/dataActions");
const initialState = {};
const possibleValuesreducer = (previousState = initialState, action) => {
    switch (action.type) {
        case dataActions_1.CRUD_GET_MATCHING_SUCCESS:
            return Object.assign(Object.assign({}, previousState), { [action.meta.relatedTo]: action.payload.data.map(record => record.id) });
        case dataActions_1.CRUD_GET_MATCHING_FAILURE:
            return Object.assign(Object.assign({}, previousState), { [action.meta.relatedTo]: { error: action.error } });
        default:
            return previousState;
    }
};
const getPossibleReferenceValues = (state, props) => {
    return state[props.referenceSource(props.resource, props.source)];
};
exports.getPossibleReferenceValues = getPossibleReferenceValues;
const getPossibleReferences = (referenceState, possibleValues, selectedIds = []) => {
    if (!possibleValues) {
        return null;
    }
    if (possibleValues.error) {
        return possibleValues;
    }
    const possibleValuesList = Array.from(possibleValues);
    selectedIds.forEach(id => possibleValuesList.some(value => value === id) ||
        possibleValuesList.unshift(id));
    return (possibleValuesList
        // @ts-ignore
        .map(id => referenceState.data[id])
        .filter(r => typeof r !== 'undefined'));
};
exports.getPossibleReferences = getPossibleReferences;
exports.default = possibleValuesreducer;
