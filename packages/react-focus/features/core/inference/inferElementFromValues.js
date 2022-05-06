"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const inflection_1 = __importDefault(require("inflection"));
const getValuesFromRecords_1 = __importDefault(require("./getValuesFromRecords"));
const InferredElement_1 = __importDefault(require("./InferredElement"));
const assertions_1 = require("./assertions");
const DefaultComponent = () => (0, jsx_runtime_1.jsx)("span", { children: ";" }, void 0);
const defaultType = {
    type: DefaultComponent,
    representation: () => '<DefaultComponent />',
};
const defaultTypes = {
    array: defaultType,
    boolean: defaultType,
    date: defaultType,
    email: defaultType,
    id: defaultType,
    number: defaultType,
    reference: defaultType,
    referenceArray: defaultType,
    richText: defaultType,
    string: defaultType,
    url: defaultType,
};
const hasType = (type, types) => typeof types[type] !== 'undefined';
/**
 * Guesses an element based on an array of values
 *
 * @example
 *     inferElementFromValues(
 *         'address',
 *         ['2 Baker Street', '1 Downing street'],
 *         { number: NumberField, string: StringField }
 *     );
 *     // new InferredElement(<StringField source="address" />)
 *
 * Types are optional: if a type isn't provided, the function falls back
 * to the nearest type.
 *
 * @example
 *     inferElementFromValues(
 *         'content',
 *         ['<h1>Hello</h1>'],
 *         { string: StringField } // no richText type
 *     );
 *     // new InferredElement(<StringField source="content" />)
 *
 * Types can be disabled by passing a falsy value.
 *
 * @example
 *     inferElementFromValues(
 *         'content',
 *         ['<h1>Hello</h1>'],
 *         { string: StringField, richText: false }
 *     );
 *     // null
 *
 * @param {string} name Property name, e.g. 'date_of_birth'
 * @param {any[]} values an array of values from which to determine the type, e.g. [12, 34.4, 43]
 * @param {Object} types A set of components indexed by type. The string type is the only required one
 *
 * @return InferredElement
 */
const inferElementFromValues = (name, values = [], types = defaultTypes) => {
    if (name === 'id' && hasType('id', types)) {
        return new InferredElement_1.default(types.id, { source: name });
    }
    if (name.substr(name.length - 3) === '_id' && hasType('reference', types)) {
        const reference = inflection_1.default.pluralize(name.substr(0, name.length - 3));
        return (types.reference &&
            new InferredElement_1.default(types.reference, {
                source: name,
                reference,
            }, new InferredElement_1.default(types.referenceChild)));
    }
    if (name.substr(name.length - 2) === 'Id' && hasType('reference', types)) {
        const reference = inflection_1.default.pluralize(name.substr(0, name.length - 2));
        return (types.reference &&
            new InferredElement_1.default(types.reference, {
                source: name,
                reference,
            }, new InferredElement_1.default(types.referenceChild)));
    }
    if (name.substr(name.length - 4) === '_ids' &&
        hasType('referenceArray', types)) {
        const reference = inflection_1.default.pluralize(name.substr(0, name.length - 4));
        return (types.referenceArray &&
            new InferredElement_1.default(types.referenceArray, {
                source: name,
                reference,
            }, new InferredElement_1.default(types.referenceArrayChild)));
    }
    if (name.substr(name.length - 3) === 'Ids' &&
        hasType('referenceArray', types)) {
        const reference = inflection_1.default.pluralize(name.substr(0, name.length - 3));
        return (types.referenceArray &&
            new InferredElement_1.default(types.referenceArray, {
                source: name,
                reference,
            }, new InferredElement_1.default(types.referenceArrayChild)));
    }
    if (values.length === 0) {
        // FIXME introspect further using name
        return new InferredElement_1.default(types.string, { source: name });
    }
    if ((0, assertions_1.valuesAreArray)(values)) {
        if ((0, assertions_1.isObject)(values[0][0]) && hasType('array', types)) {
            const leafValues = (0, getValuesFromRecords_1.default)(values.reduce((acc, vals) => acc.concat(vals), []));
            // FIXME bad visual representation
            return (types.array &&
                new InferredElement_1.default(types.array, {
                    source: name,
                }, Object.keys(leafValues).map(leafName => inferElementFromValues(leafName, leafValues[leafName], types))));
        }
        // FIXME introspect further
        return new InferredElement_1.default(types.string, { source: name });
    }
    if ((0, assertions_1.valuesAreBoolean)(values) && hasType('boolean', types)) {
        return new InferredElement_1.default(types.boolean, { source: name });
    }
    if ((0, assertions_1.valuesAreDate)(values) && hasType('date', types)) {
        return new InferredElement_1.default(types.date, { source: name });
    }
    if ((0, assertions_1.valuesAreString)(values)) {
        if (name === 'email' && hasType('email', types)) {
            return new InferredElement_1.default(types.email, { source: name });
        }
        if (name === 'url' && hasType('url', types)) {
            return new InferredElement_1.default(types.url, { source: name });
        }
        if ((0, assertions_1.valuesAreDateString)(values) && hasType('date', types)) {
            return new InferredElement_1.default(types.date, { source: name });
        }
        if ((0, assertions_1.valuesAreHtml)(values) && hasType('richText', types)) {
            return new InferredElement_1.default(types.richText, { source: name });
        }
        return new InferredElement_1.default(types.string, { source: name });
    }
    if (((0, assertions_1.valuesAreInteger)(values) || (0, assertions_1.valuesAreNumeric)(values)) &&
        hasType('number', types)) {
        return new InferredElement_1.default(types.number, { source: name });
    }
    if ((0, assertions_1.valuesAreObject)(values)) {
        // we need to go deeper
        // Arbitrarily, choose the first prop of the first object
        const propName = Object.keys(values[0]).shift();
        const leafValues = values.map(v => v[propName]);
        return inferElementFromValues(`${name}.${propName}`, leafValues, types);
    }
    return new InferredElement_1.default(types.string, { source: name });
};
exports.default = inferElementFromValues;
