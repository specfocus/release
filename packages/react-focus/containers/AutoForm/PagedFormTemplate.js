"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Step_1 = __importDefault(require("@mui/material/Step"));
const StepLabel_1 = __importDefault(require("@mui/material/StepLabel"));
const Stepper_1 = __importDefault(require("@mui/material/Stepper"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importDefault(require("react"));
const FormTemplate_1 = __importDefault(require("./FormTemplate"));
class PagedFormTemplate extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.next = (values) => {
            console.log(values);
            this.setState((state) => ({
                currPage: Math.min(state.currPage + 1, state.size),
                values: Object.assign(Object.assign({}, state.values), values)
            }));
        };
        this.previous = () => this.setState((state) => ({
            currPage: Math.max(state.currPage - 1, 0)
        }));
        this.submitHelper = (values) => {
            const { handleSubmit } = this.props;
            const { currPage, size } = this.state;
            const isLastPage = currPage === size;
            if (isLastPage) {
                return handleSubmit(Object.assign(Object.assign({}, this.state.values), values));
            }
            else {
                this.next(values);
            }
        };
        this.isSubset = (values, initialValues) => {
            if (!initialValues) {
                return false;
            }
            const keys = Object.keys(initialValues);
            for (const key of keys) {
                if (!values[key]) {
                    return false;
                }
            }
            return true;
        };
        this.getStepContent = (index) => {
            const { data, validationSchema, initialValues } = this.props;
            const { size, values } = this.state;
            const hasValues = this.isSubset(values, initialValues[index]);
            return ((0, jsx_runtime_1.jsx)(FormTemplate_1.default, { data: data[index], validationSchema: validationSchema[index], initialValues: hasValues ? values : initialValues[index], handleSubmit: this.submitHelper, submitButtonLabel: index === size ? 'Finish' : 'Next >>', handleCancel: this.previous, cancelButtonLabel: '<< Back', cancelDisabled: index === 0 }, void 0));
        };
        const { data } = this.props;
        this.state = {
            currPage: 0,
            values: {},
            size: data ? data.length - 1 : 0
        };
    }
    static get propTypes() {
        return {
            data: prop_types_1.default.array.isRequired,
            validationSchema: prop_types_1.default.any.isRequired,
            handleSubmit: prop_types_1.default.func.isRequired,
            initialValues: prop_types_1.default.any.isRequired,
            labels: prop_types_1.default.array
        };
    }
    render() {
        const { labels } = this.props;
        const { currPage, size } = this.state;
        const actualLabels = labels || new Array(size + 1).fill('');
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Stepper_1.default, Object.assign({ activeStep: currPage, alternativeLabel: true }, { children: actualLabels.map((label, index) => {
                        return ((0, jsx_runtime_1.jsx)(Step_1.default, { children: (0, jsx_runtime_1.jsx)(StepLabel_1.default, { children: label }, void 0) }, index));
                    }) }), void 0), this.getStepContent(currPage)] }, void 0));
    }
}
exports.default = PagedFormTemplate;
