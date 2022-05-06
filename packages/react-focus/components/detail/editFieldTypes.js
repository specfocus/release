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
const jsx_runtime_1 = require("react/jsx-runtime");
const SimpleForm_1 = __importDefault(require("../form/SimpleForm"));
const input_1 = require("../input");
const editFieldTypes = {
    form: {
        component: SimpleForm_1.default,
        representation: (_, children) => `        <SimpleForm>
${children.map(child => `            ${child.getRepresentation()}`).join('\n')}
        </SimpleForm>`,
    },
    array: {
        // eslint-disable-next-line react/display-name
        component: (_a) => {
            var { children } = _a, props = __rest(_a, ["children"]);
            return ((0, jsx_runtime_1.jsx)(input_1.ArrayInput, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(input_1.SimpleFormIterator, { children: children }, void 0) }), void 0));
        },
        representation: (props, children) => `<ArrayInput source="${props.source}"><SimpleFormIterator>${children
            .map(child => child.getRepresentation())
            .join('\n')}</SimpleFormIterator></ArrayInput>`,
    },
    boolean: {
        component: input_1.BooleanInput,
        representation: (props) => `<BooleanInput source="${props.source}" />`,
    },
    date: {
        component: input_1.DateInput,
        representation: (props) => `<DateInput source="${props.source}" />`,
    },
    email: {
        component: input_1.TextInput,
        representation: (props) => `<TextInput source="${props.source}" />`,
    },
    id: {
        component: input_1.TextInput,
        representation: (props) => `<TextInput source="${props.source}" />`,
    },
    number: {
        component: input_1.NumberInput,
        representation: (props) => `<NumberInput source="${props.source}" />`,
    },
    reference: {
        component: input_1.ReferenceInput,
        representation: (props, children) => `<ReferenceInput source="${props.source}" reference="${props.reference}">${children.getRepresentation()}</ReferenceInput>`,
    },
    referenceChild: {
        component: (props) => ((0, jsx_runtime_1.jsx)(input_1.SelectInput, Object.assign({ optionText: "id" }, props), void 0)),
        representation: () => `<SelectInput optionText="id" />`,
    },
    referenceArray: {
        component: input_1.ReferenceArrayInput,
        representation: (props) => `<ReferenceArrayInput source="${props.source}" reference="${props.reference}"><TextInput source="id" /></ReferenceArrayInput>`,
    },
    referenceArrayChild: {
        component: (props) => (0, jsx_runtime_1.jsx)(input_1.SelectInput, Object.assign({ optionText: "id" }, props), void 0),
        representation: () => `<SelectInput optionText="id" />`,
    },
    richText: {
        component: input_1.TextInput,
        representation: (props) => `<TextInput source="${props.source}" />`,
    },
    string: {
        component: input_1.TextInput,
        representation: (props) => `<TextInput source="${props.source}" />`,
    },
    url: {
        component: input_1.TextInput,
        representation: (props) => `<TextInput source="${props.source}" />`,
    },
};
exports.default = editFieldTypes;
