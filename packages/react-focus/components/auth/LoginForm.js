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
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const react_final_form_1 = require("react-final-form");
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
const PREFIX = 'RaLoginForm';
const classes = {
    form: `${PREFIX}-form`,
    input: `${PREFIX}-input`,
    button: `${PREFIX}-button`,
    icon: `${PREFIX}-icon`,
};
const Root = (0, styles_1.styled)('form')(({ theme }) => ({
    [`& .${classes.form}`]: {
        padding: '0 1em 1em 1em',
    },
    [`& .${classes.input}`]: {
        marginTop: '1em',
    },
    [`& .${classes.button}`]: {
        width: '100%',
    },
    [`& .${classes.icon}`]: {
        marginRight: theme.spacing(1),
    },
}));
const Input = (_a) => {
    var { meta: { touched, error }, // eslint-disable-line react/prop-types
    input: inputProps } = _a, // eslint-disable-line react/prop-types
    props = __rest(_a, ["meta", "input"]);
    return ((0, jsx_runtime_1.jsx)(material_1.TextField, Object.assign({ error: !!(touched && error), helperText: touched && error }, inputProps, props, { fullWidth: true }), void 0));
};
const LoginForm = (props) => {
    const { redirectTo } = props;
    const [loading, setLoading] = (0, core_1.useSafeSetState)(false);
    const login = (0, core_1.useLogin)();
    const translate = (0, core_1.useTranslate)();
    const notify = (0, core_1.useNotify)();
    const validate = (values) => {
        const errors = { username: undefined, password: undefined };
        if (!values.username) {
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };
    const submit = values => {
        setLoading(true);
        login(values, redirectTo)
            .then(() => {
            setLoading(false);
        })
            .catch(error => {
            setLoading(false);
            notify(typeof error === 'string'
                ? error
                : typeof error === 'undefined' || !error.message
                    ? 'ra.auth.sign_in_error'
                    : error.message, 'warning', {
                _: typeof error === 'string'
                    ? error
                    : error && error.message
                        ? error.message
                        : undefined,
            });
        });
    };
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.Form, { onSubmit: submit, validate: validate, render: ({ handleSubmit }) => ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ onSubmit: handleSubmit, noValidate: true }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.form }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.input }, { children: (0, jsx_runtime_1.jsx)(react_final_form_1.Field, { autoFocus: true, id: "username", name: "username", component: Input, label: translate('ra.auth.username'), disabled: loading }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.input }, { children: (0, jsx_runtime_1.jsx)(react_final_form_1.Field, { id: "password", name: "password", component: Input, label: translate('ra.auth.password'), type: "password", disabled: loading, autoComplete: "current-password" }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.CardActions, { children: (0, jsx_runtime_1.jsxs)(material_1.Button, Object.assign({ variant: "contained", type: "submit", color: "primary", disabled: loading, className: classes.button }, { children: [loading && ((0, jsx_runtime_1.jsx)(material_1.CircularProgress, { className: classes.icon, size: 18, thickness: 2 }, void 0)), translate('ra.auth.sign_in')] }), void 0) }, void 0)] }), void 0)) }, void 0));
};
LoginForm.propTypes = {
    redirectTo: prop_types_1.default.string,
};
exports.default = LoginForm;
