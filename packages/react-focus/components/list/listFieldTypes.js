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
const Datagrid_1 = __importDefault(require("./datagrid/Datagrid"));
const SingleFieldList_1 = __importDefault(require("./SingleFieldList"));
const ArrayField_1 = __importDefault(require("../field/ArrayField"));
const BooleanField_1 = __importDefault(require("../field/BooleanField"));
const ChipField_1 = __importDefault(require("../field/ChipField"));
const DateField_1 = __importDefault(require("../field/DateField"));
const EmailField_1 = __importDefault(require("../field/EmailField"));
const NumberField_1 = __importDefault(require("../field/NumberField"));
const ReferenceField_1 = __importDefault(require("../field/ReferenceField"));
const ReferenceArrayField_1 = __importDefault(require("../field/ReferenceArrayField"));
const TextField_1 = __importDefault(require("../field/TextField"));
const UrlField_1 = __importDefault(require("../field/UrlField"));
exports.default = {
    table: {
        component: props => (0, jsx_runtime_1.jsx)(Datagrid_1.default, Object.assign({ rowClick: "edit" }, props), void 0),
        representation: (_, children) => `        <Datagrid rowClick="edit">
${children.map(child => `            ${child.getRepresentation()}`).join('\n')}
        </Datagrid>`,
    },
    array: {
        // eslint-disable-next-line react/display-name
        component: (_a) => {
            var { children } = _a, props = __rest(_a, ["children"]);
            return ((0, jsx_runtime_1.jsx)(ArrayField_1.default, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(SingleFieldList_1.default, { children: (0, jsx_runtime_1.jsx)(ChipField_1.default, { source: children.length > 0 && children[0].props.source }, void 0) }, void 0) }), void 0));
        },
        representation: (props, children) => `<ArrayField source="${props.source}"><SingleFieldList><ChipField source="${children.length > 0 && children[0].getProps().source}" /></SingleFieldList></ArrayField>`,
    },
    boolean: {
        component: BooleanField_1.default,
        representation: props => `<BooleanField source="${props.source}" />`,
    },
    date: {
        component: DateField_1.default,
        representation: props => `<DateField source="${props.source}" />`,
    },
    email: {
        component: EmailField_1.default,
        representation: props => `<EmailField source="${props.source}" />`,
    },
    id: {
        component: TextField_1.default,
        representation: props => `<TextField source="${props.source}" />`,
    },
    number: {
        component: NumberField_1.default,
        representation: props => `<NumberField source="${props.source}" />`,
    },
    reference: {
        component: ReferenceField_1.default,
        representation: props => `<ReferenceField source="${props.source}" reference="${props.reference}"><TextField source="id" /></ReferenceField>`,
    },
    referenceChild: {
        component: props => (0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({ source: "id" }, props), void 0),
        representation: () => `<TextField source="id" />`,
    },
    referenceArray: {
        component: ReferenceArrayField_1.default,
        representation: props => `<ReferenceArrayField source="${props.source}" reference="${props.reference}"><TextField source="id" /></ReferenceArrayField>`,
    },
    referenceArrayChild: {
        component: props => (0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({ source: "id" }, props), void 0),
        representation: () => `<TextField source="id" />`,
    },
    richText: undefined,
    string: {
        component: TextField_1.default,
        representation: props => `<TextField source="${props.source}" />`,
    },
    url: {
        component: UrlField_1.default,
        representation: props => `<UrlField source="${props.source}" />`,
    },
};
