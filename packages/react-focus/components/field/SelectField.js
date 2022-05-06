"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const get_1 = __importDefault(require("lodash/get"));
const core_1 = require("../../features/core");
const material_1 = require("@mui/material");
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const types_1 = require("./types");
/**
 * Display a value in an enumeration
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <SelectField source="gender" choices={choices} />
 *
 * By default, the text is built by
 * - finding a choice where the 'id' property equals the field value
 * - using the 'name' property as the option text
 *
 * You can also customize the properties to use for the value and text,
 * thanks to the 'optionValue' and 'optionText' attributes.
 *
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectField source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectField source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <Chip>{record.first_name} {record.last_name}</Chip>;
 * <SelectField source="gender" choices={choices} optionText={<FullNameField />}/>
 *
 * The current choice is translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceField>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <SelectField source="gender" choices={choices} translateChoice={false}/>
 *
 * **Tip**: <ReferenceField> sets `translateChoice` to false by default.
 */
exports.SelectField = (0, react_1.memo)(props => {
    const { className, emptyText, source, choices, optionValue, optionText, translateChoice } = props, rest = __rest(props, ["className", "emptyText", "source", "choices", "optionValue", "optionText", "translateChoice"]);
    const record = (0, core_1.useRecordContext)(props);
    const value = (0, get_1.default)(record, source);
    const { getChoiceText, getChoiceValue } = (0, core_1.useChoices)({
        optionText,
        optionValue,
        translateChoice,
    });
    const choice = choices.find(choice => getChoiceValue(choice) === value);
    if (!choice) {
        return emptyText ? ((0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: emptyText }), void 0)) : null;
    }
    let choiceText = getChoiceText(choice);
    return ((0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: choiceText }), void 0));
});
exports.SelectField.defaultProps = {
    optionText: 'name',
    optionValue: 'id',
    translateChoice: true,
};
exports.SelectField.defaultProps = {
    addLabel: true,
};
exports.SelectField.propTypes = Object.assign(Object.assign(Object.assign({}, material_1.Typography.propTypes), types_1.fieldPropTypes), { choices: prop_types_1.default.arrayOf(prop_types_1.default.object).isRequired, optionText: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.func,
        prop_types_1.default.element,
    ]), optionValue: prop_types_1.default.string, translateChoice: prop_types_1.default.bool });
exports.SelectField.displayName = 'SelectField';
exports.default = exports.SelectField;
