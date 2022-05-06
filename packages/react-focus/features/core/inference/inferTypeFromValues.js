"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferTypeFromValues = exports.InferenceTypes = void 0;
const inflection_1 = __importDefault(require("inflection"));
const getValuesFromRecords_1 = __importDefault(require("./getValuesFromRecords"));
const assertions_1 = require("./assertions");
exports.InferenceTypes = [
    'array',
    'boolean',
    'date',
    'email',
    'id',
    'image',
    'number',
    'reference',
    'referenceChild',
    'referenceArray',
    'referenceArrayChild',
    'richText',
    'string',
    'url',
    'object',
];
/**
 * Guesses an element type based on an array of values
 *
 * @example
 *     inferElementFromValues(
 *         'address',
 *         ['2 Baker Street', '1 Downing street'],
 *     );
 *     // { type: 'string', props: { source: 'address' } }
 *
 * @param {string} name Property name, e.g. 'date_of_birth'
 * @param {any[]} values an array of values from which to determine the type, e.g. [12, 34.4, 43]
 */
const inferTypeFromValues = (name, values = []) => {
    if (name === 'id') {
        return { type: 'id', props: { source: name } };
    }
    if (name.substr(name.length - 3) === '_id') {
        return {
            type: 'reference',
            props: {
                source: name,
                reference: inflection_1.default.pluralize(name.substr(0, name.length - 3)),
            },
            children: { type: 'referenceChild' },
        };
    }
    if (name.substr(name.length - 2) === 'Id') {
        return {
            type: 'reference',
            props: {
                source: name,
                reference: inflection_1.default.pluralize(name.substr(0, name.length - 2)),
            },
            children: { type: 'referenceChild' },
        };
    }
    if (name.substr(name.length - 4) === '_ids') {
        return {
            type: 'referenceArray',
            props: {
                source: name,
                reference: inflection_1.default.pluralize(name.substr(0, name.length - 4)),
            },
            children: { type: 'referenceArrayChild' },
        };
    }
    if (name.substr(name.length - 3) === 'Ids') {
        return {
            type: 'referenceArray',
            props: {
                source: name,
                reference: inflection_1.default.pluralize(name.substr(0, name.length - 3)),
            },
            children: { type: 'referenceArrayChild' },
        };
    }
    if (values.length === 0) {
        if (name === 'email') {
            return { type: 'email', props: { source: name } };
        }
        if (name === 'url') {
            return { type: 'url', props: { source: name } };
        }
        // FIXME introspect further using name
        return { type: 'string', props: { source: name } };
    }
    if ((0, assertions_1.valuesAreArray)(values)) {
        if ((0, assertions_1.isObject)(values[0][0])) {
            const leafValues = (0, getValuesFromRecords_1.default)(values.reduce((acc, vals) => acc.concat(vals), []));
            // FIXME bad visual representation
            return {
                type: 'array',
                props: { source: name },
                children: Object.keys(leafValues).map(leafName => (0, exports.inferTypeFromValues)(leafName, leafValues[leafName])),
            };
        }
        // FIXME introspect further
        return { type: 'string', props: { source: name } };
    }
    if ((0, assertions_1.valuesAreBoolean)(values)) {
        return { type: 'boolean', props: { source: name } };
    }
    if ((0, assertions_1.valuesAreDate)(values)) {
        return { type: 'date', props: { source: name } };
    }
    if ((0, assertions_1.valuesAreString)(values)) {
        if (name === 'email' || (0, assertions_1.valuesAreEmail)(values)) {
            return { type: 'email', props: { source: name } };
        }
        if (name === 'url' || (0, assertions_1.valuesAreUrl)(values)) {
            if ((0, assertions_1.valuesAreImageUrl)(values)) {
                return { type: 'image', props: { source: name } };
            }
            return { type: 'url', props: { source: name } };
        }
        if ((0, assertions_1.valuesAreDateString)(values)) {
            return { type: 'date', props: { source: name } };
        }
        if ((0, assertions_1.valuesAreHtml)(values)) {
            return { type: 'richText', props: { source: name } };
        }
        if ((0, assertions_1.valuesAreInteger)(values) || (0, assertions_1.valuesAreNumeric)(values)) {
            return { type: 'number', props: { source: name } };
        }
        return { type: 'string', props: { source: name } };
    }
    if ((0, assertions_1.valuesAreInteger)(values) || (0, assertions_1.valuesAreNumeric)(values)) {
        return { type: 'number', props: { source: name } };
    }
    if ((0, assertions_1.valuesAreObject)(values)) {
        /// Arbitrarily, choose the first prop of the first object
        const propName = Object.keys(values[0]).shift();
        const leafValues = values.map(v => v[propName]);
        return (0, exports.inferTypeFromValues)(`${name}.${propName}`, leafValues);
    }
    return { type: 'string', props: { source: name } };
};
exports.inferTypeFromValues = inferTypeFromValues;
