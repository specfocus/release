"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const FormTemplate_1 = __importDefault(require("./FormTemplate"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const form_template_example_1 = require("./forms/form-template-example");
const PagedFormTemplateExample_1 = __importDefault(require("./PagedFormTemplateExample"));
class FormTemplateExample extends react_1.Component {
    constructor() {
        super(...arguments);
        this.handleSubmit = (data) => {
            console.log(data);
        };
    }
    render() {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ container: true, sx: { justifyItems: 'center' } }, { children: (0, jsx_runtime_1.jsx)(Paper_1.default, Object.assign({ style: { padding: 16, width: '50%' } }, { children: (0, jsx_runtime_1.jsx)(FormTemplate_1.default, { pages: true, data: form_template_example_1.data, handleSubmit: this.handleSubmit, validationSchema: form_template_example_1.validationSchema, initialValues: form_template_example_1.initialValues }, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(PagedFormTemplateExample_1.default, {}, void 0)] }, void 0));
    }
}
exports.default = FormTemplateExample;
