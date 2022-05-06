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
const react_1 = require("react");
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const Save_1 = __importDefault(require("@mui/icons-material/Save"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const Button_2 = require("./Button");
const PREFIX = 'RaSaveButton';
const classes = {
    button: `${PREFIX}-button`,
    leftIcon: `${PREFIX}-leftIcon`,
    icon: `${PREFIX}-icon`,
};
const StyledButton = (0, styles_1.styled)(Button_1.default)(({ theme }) => ({
    [`&.${classes.button}`]: {
        position: 'relative',
    },
    [`& .${classes.leftIcon}`]: {
        marginRight: theme.spacing(1),
    },
    [`& .${classes.icon}`]: {
        fontSize: 18,
    },
}));
/**
 * Submit button for resource forms (Edit and Create).
 *
 * @typedef {Object} Props the props you can use (other props are injected by the <Toolbar>)
 * @prop {string} className
 * @prop {string} label Button label. Defaults to 'ra.action.save', translated.
 * @prop {boolean} disabled Disable the button.
 * @prop {string} variant Material-ui variant for the button. Defaults to 'contained'.
 * @prop {ReactElement} icon
 * @prop {string|boolean} redirect Override of the default redirect in case of success. Can be 'list', 'show', 'edit' (for create views), or false (to stay on the creation form).
 * @prop {function} onSave (deprecated)
 * @prop {function} onSuccess Callback to execute instead of the default success side effects. Receives the dataProvider response as argument.
 * @prop {function} onFailure Callback to execute instead of the default error side effects. Receives the dataProvider error response as argument.
 * @prop {function} transform Callback to execute before calling the dataProvider. Receives the data from the form, must return that transformed data. Can be asynchronous (and return a Promise)
 *
 * @param {Props} props
 *
 * @example // with custom redirection
 *
 * <SaveButton label="post.action.save_and_edit" redirect="edit" />
 *
 * @example // with no redirection
 *
 * <SaveButton label="post.action.save_and_add" redirect={false} />
 *
 * @example // with custom success side effect
 *
 * const MySaveButton = props => {
 *     const notify = useNotify();
 *     const redirect = useRedirect();
 *     const onSuccess = (response) => {
 *         notify(`Post "${response.data.title}" saved!`);
 *         redirect('/posts');
 *     };
 *     return <SaveButton {...props} onSuccess={onSuccess} />;
 * }
 */
const SaveButton = (props) => {
    const { className, invalid, label = 'ra.action.save', disabled, redirect, saving, submitOnEnter, variant = 'contained', icon = defaultIcon, onClick, handleSubmitWithRedirect, onSave, onSuccess, onFailure, transform } = props, rest = __rest(props, ["className", "invalid", "label", "disabled", "redirect", "saving", "submitOnEnter", "variant", "icon", "onClick", "handleSubmitWithRedirect", "onSave", "onSuccess", "onFailure", "transform"]);
    const notify = (0, core_1.useNotify)();
    const translate = (0, core_1.useTranslate)();
    const formContext = (0, core_1.useFormContext)();
    const { setOnSuccess, setOnFailure, setTransform } = (0, core_1.useSaveContext)(props);
    const handleClick = event => {
        // deprecated: use onSuccess and transform instead of onSave
        if (typeof onSave === 'function') {
            if (process.env.NODE_ENV !== 'production') {
                console.warn('<SaveButton onSave> prop is deprecated, use the onSuccess prop instead.');
                if (!formContext || !formContext.setOnSave) {
                    console.warn('Using <SaveButton> outside a FormContext is deprecated.');
                }
            }
            if (formContext && formContext.setOnSave) {
                formContext.setOnSave(onSave);
            }
        }
        else {
            if (process.env.NODE_ENV !== 'production' &&
                (!formContext || !formContext.setOnSave)) {
                console.warn('Using <SaveButton> outside a FormContext is deprecated.');
            }
            if (formContext && formContext.setOnSave) {
                // we reset to the Form default save function
                formContext.setOnSave();
            }
        }
        if (onSuccess) {
            setOnSuccess(onSuccess);
        }
        if (onFailure) {
            setOnFailure(onFailure);
        }
        if (transform) {
            setTransform(transform);
        }
        if (saving) {
            // prevent double submission
            event.preventDefault();
        }
        else {
            if (invalid) {
                notify('ra.message.invalid_form', 'warning');
            }
            // always submit form explicitly regardless of button type
            if (event) {
                event.preventDefault();
            }
            handleSubmitWithRedirect(redirect);
        }
        if (typeof onClick === 'function') {
            onClick(event);
        }
    };
    const type = submitOnEnter ? 'submit' : 'button';
    const displayedLabel = label && translate(label, { _: label });
    return ((0, jsx_runtime_1.jsxs)(StyledButton, Object.assign({ className: (0, classnames_1.default)(classes.button, className), variant: variant, type: type, onClick: handleClick, 
        // TODO: find a way to display the loading state (LoadingButton from mui Lab?)
        // This is because the "default" color does not exist anymore
        color: "primary", "aria-label": displayedLabel, disabled: disabled }, (0, Button_2.sanitizeButtonRestProps)(rest), { children: [saving ? ((0, jsx_runtime_1.jsx)(CircularProgress_1.default, { size: 18, thickness: 2, className: classes.leftIcon }, void 0)) : ((0, react_1.cloneElement)(icon, {
                className: (0, classnames_1.default)(classes.leftIcon, classes.icon),
            })), displayedLabel] }), void 0));
};
const defaultIcon = (0, jsx_runtime_1.jsx)(Save_1.default, {}, void 0);
SaveButton.propTypes = {
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    handleSubmitWithRedirect: prop_types_1.default.func,
    // @deprecated
    onSave: prop_types_1.default.func,
    invalid: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    saving: prop_types_1.default.bool,
    submitOnEnter: prop_types_1.default.bool,
    variant: prop_types_1.default.oneOf(['text', 'outlined', 'contained']),
    icon: prop_types_1.default.element,
};
exports.default = SaveButton;
