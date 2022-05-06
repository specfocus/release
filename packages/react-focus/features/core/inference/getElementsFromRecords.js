"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inferElementFromValues_1 = __importDefault(require("./inferElementFromValues"));
const getValuesFromRecords_1 = __importDefault(require("./getValuesFromRecords"));
/**
 * Get a list of React-admin field components from a list of records
 *
 * @example
 * const records = [
 *     {
 *         "id": 1,
 *         "title": "Lorem Ipsum",
 *         "views": 254,
 *         "user_id": 123,
 *     },
 *     {
 *         "id": 2,
 *         "title": "Sic Dolor amet",
 *         "user_id": 456,
 *     },
 * ];
 * const types = {
 *     id: NumberField,
 *     string: TextField,
 *     number: NumberField,
 *     reference: ReferenceField
 * };
 * const components = getElementsFromRecords(records, types);
 * // [
 * //    <NumberField source="id" />,
 * //    <TextField source="title" />,
 * //    <NumberField source="views" />,
 * //    <ReferenceField source="user_id" reference="users"><NumberField source="id" /></ReferenceField>,
 * // ];
 */
exports.default = (records, types) => {
    const fieldValues = (0, getValuesFromRecords_1.default)(records);
    return Object.keys(fieldValues)
        .reduce((fields, fieldName) => fields.concat((0, inferElementFromValues_1.default)(fieldName, fieldValues[fieldName], types)), [])
        .filter(inferredElement => inferredElement.isDefined());
};
