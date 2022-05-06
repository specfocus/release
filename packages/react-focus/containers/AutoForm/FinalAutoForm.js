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
const Button_1 = __importDefault(require("@mui/material/Button"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const styles_1 = require("@mui/styles");
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const Validation_1 = require("../../components/final-form/Validation");
const AutoForm_1 = __importDefault(require("./AutoForm"));
const useFormStyles = (0, styles_1.makeStyles)((theme) => (0, styles_1.createStyles)({
    paper: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
        marginBottom: theme.spacing(5),
    },
    paperInner: {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
    },
    buttons: {
        '& > *': {
            marginTop: theme.spacing(3),
            marginRight: theme.spacing(1),
        },
    },
}));
function FinalAutoForm(_a) {
    var { children, form: form_, initialValues, schema } = _a, props = __rest(_a, ["children", "form", "initialValues", "schema"]);
    const classes = useFormStyles();
    const render = // useCallback(
     (_a) => {
        var { form, handleSubmit } = _a, state = __rest(_a, ["form", "handleSubmit"]);
        return ((0, jsx_runtime_1.jsx)(AutoForm_1.default, Object.assign({}, props, { dependencies: {}, dispatch: (state) => state, form: form, handleSubmit: handleSubmit, schema: schema, state: state }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [children, (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ container: true }, { children: (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ item: true, className: classes.buttons }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "button", variant: "contained", onClick: onReset, disabled: state.submitting }, { children: "Reset" }), void 0), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "contained", color: "primary", type: "submit", disabled: state.submitting }, { children: "Submit" }), void 0)] }), void 0) }), void 0)] }, void 0) }), void 0));
    };
    /**
     * Uses the optional helper makeValidate function to format the error messages
     * into something usable by final form.
     */
    const validate = (0, Validation_1.makeValidate)(schema);
    /**
     * Grabs all the required fields from the schema so that they can be passed into
     * the components without having to declare them in both the schema and the component.
     */
    const required = (0, Validation_1.makeRequired)(schema);
    const subscription = { submitting: true };
    const [subscriptionState, setSubscriptionState] = (0, react_1.useState)(subscription);
    const [submittedValues, setSubmittedValues] = (0, react_1.useState)(undefined);
    const onChange = () => {
        setSubscriptionState(subscriptionState === undefined ? subscription : undefined);
    };
    const onSubmit = (values) => {
        setSubmittedValues(values);
    };
    const onReset = () => {
        setSubmittedValues(undefined);
    };
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.Form, { onSubmit: onSubmit, initialValues: submittedValues || initialValues, validate: validate, 
        // @ts-ignore
        render: render, subscription: subscription }, subscription));
}
exports.default = FinalAutoForm;
