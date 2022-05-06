"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const react_1 = require("react");
const paged_form_template_example_1 = require("./forms/paged-form-template-example");
const PagedFormTemplate_1 = __importDefault(require("./PagedFormTemplate"));
class PagedFormTemplateExample extends react_1.Component {
    constructor() {
        super(...arguments);
        this.handleSubmit = (data) => {
            console.log(data);
        };
        this.onSubmit = (data) => {
            console.log(data);
        };
    }
    render() {
        return ((0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ container: true, sx: { justifyItems: 'center' } }, { children: (0, jsx_runtime_1.jsx)(Paper_1.default, Object.assign({ style: { padding: 16, width: '50%' } }, { children: (0, jsx_runtime_1.jsx)(PagedFormTemplate_1.default, { handleSubmit: this.handleSubmit, data: paged_form_template_example_1.data, validationSchema: paged_form_template_example_1.validationSchema, initialValues: paged_form_template_example_1.initialValues }, void 0) }), void 0) }), void 0));
    }
}
exports.default = PagedFormTemplateExample;
