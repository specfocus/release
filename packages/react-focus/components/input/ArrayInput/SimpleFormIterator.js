"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleFormIterator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const classnames_1 = __importDefault(require("classnames"));
const get_1 = __importDefault(require("lodash/get"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const react_transition_group_1 = require("react-transition-group");
const core_1 = require("../../../features/core");
const AddItemButton_1 = require("./AddItemButton");
const RemoveItemButton_1 = require("./RemoveItemButton");
const ReOrderButtons_1 = require("./ReOrderButtons");
const SimpleFormIteratorContext_1 = require("./SimpleFormIteratorContext");
const SimpleFormIteratorItem_1 = require("./SimpleFormIteratorItem");
const useArrayInput_1 = require("./useArrayInput");
const useSimpleFormIteratorStyles_1 = require("./useSimpleFormIteratorStyles");
const SimpleFormIterator = (props) => {
    const { addButton = (0, jsx_runtime_1.jsx)(AddItemButton_1.AddItemButton, {}, void 0), removeButton = (0, jsx_runtime_1.jsx)(RemoveItemButton_1.RemoveItemButton, {}, void 0), reOrderButtons = (0, jsx_runtime_1.jsx)(ReOrderButtons_1.ReOrderButtons, {}, void 0), basePath, children, className, record, resource, source, disabled, disableAdd, disableRemove, disableReordering, variant, margin, TransitionProps, defaultValue, getItemLabel = DefaultLabelFn, } = props;
    const { fields, meta } = (0, useArrayInput_1.useArrayInput)(props);
    const { error, submitFailed } = meta;
    const nodeRef = (0, react_1.useRef)(null);
    // We need a unique id for each field for a proper enter/exit animation
    // so we keep an internal map between the field position and an auto-increment id
    const nextId = (0, react_1.useRef)(fields && fields.length
        ? fields.length
        : defaultValue
            ? defaultValue.length
            : 0);
    // We check whether we have a defaultValue (which must be an array) before checking
    // the fields prop which will always be empty for a new record.
    // Without it, our ids wouldn't match the default value and we would get key warnings
    // on the CssTransition element inside our render method
    const ids = (0, react_1.useRef)(nextId.current > 0 ? Array.from(Array(nextId.current).keys()) : []);
    const removeField = (0, react_1.useCallback)((index) => {
        ids.current.splice(index, 1);
        fields.remove(index);
    }, [fields]);
    const addField = (0, react_1.useCallback)((item = undefined) => {
        ids.current.push(nextId.current++);
        fields.push(item);
    }, [fields]);
    // add field and call the onClick event of the button passed as addButton prop
    const handleAddButtonClick = (originalOnClickHandler) => (event) => {
        addField();
        if (originalOnClickHandler) {
            originalOnClickHandler(event);
        }
    };
    const handleReorder = (0, react_1.useCallback)((origin, destination) => {
        const item = ids.current[origin];
        ids.current[origin] = ids.current[destination];
        ids.current[destination] = item;
        fields.move(origin, destination);
    }, [fields]);
    const records = (0, get_1.default)(record, source);
    const context = (0, react_1.useMemo)(() => ({
        total: fields.length,
        add: addField,
        remove: removeField,
        reOrder: handleReorder,
    }), [fields.length, addField, removeField, handleReorder]);
    return fields ? ((0, jsx_runtime_1.jsx)(SimpleFormIteratorContext_1.SimpleFormIteratorContext.Provider, Object.assign({ value: context }, { children: (0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.root, className) }, { children: [submitFailed && typeof error !== 'object' && error && ((0, jsx_runtime_1.jsx)(material_1.FormHelperText, Object.assign({ error: true }, { children: (0, jsx_runtime_1.jsx)(core_1.ValidationError, { error: error }, void 0) }), void 0)), (0, jsx_runtime_1.jsx)(react_transition_group_1.TransitionGroup, Object.assign({ component: null }, { children: fields.map((member, index) => ((0, jsx_runtime_1.jsx)(react_transition_group_1.CSSTransition, Object.assign({ nodeRef: nodeRef, timeout: 500, classNames: "fade" }, TransitionProps, { children: (0, jsx_runtime_1.jsx)(SimpleFormIteratorItem_1.SimpleFormIteratorItem, Object.assign({ basePath: basePath, disabled: disabled, disableRemove: disableRemove, disableReordering: disableReordering, fields: fields, getItemLabel: getItemLabel, index: index, margin: margin, member: member, meta: meta, onRemoveField: removeField, onReorder: handleReorder, record: (records && records[index]) || {}, removeButton: removeButton, reOrderButtons: reOrderButtons, resource: resource, source: source, variant: variant }, { children: children }), void 0) }), ids.current[index]))) }), void 0), !disabled && !disableAdd && ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.line }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.action }, { children: (0, react_1.cloneElement)(addButton, {
                            onClick: handleAddButtonClick(addButton.props.onClick),
                            className: (0, classnames_1.default)('button-add', `button-add-${source}`),
                        }) }), void 0) }), void 0))] }), void 0) }), void 0)) : null;
};
exports.SimpleFormIterator = SimpleFormIterator;
exports.SimpleFormIterator.defaultProps = {
    disableAdd: false,
    disableRemove: false,
};
exports.SimpleFormIterator.propTypes = {
    defaultValue: prop_types_1.default.any,
    addButton: prop_types_1.default.element,
    removeButton: prop_types_1.default.element,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    // @ts-ignore
    fields: prop_types_1.default.object,
    meta: prop_types_1.default.object,
    // @ts-ignore
    record: prop_types_1.default.object,
    source: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    translate: prop_types_1.default.func,
    disableAdd: prop_types_1.default.bool,
    disableRemove: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    TransitionProps: prop_types_1.default.shape({}),
};
const Root = (0, material_1.styled)('ul')(({ theme }) => ({
    [`${useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix} .${useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.root}`]: {
        padding: 0,
        marginBottom: 0,
        '& > li:last-child': {
            borderBottom: 'none',
        },
    },
    [`${useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix} .${useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.line}`]: {
        display: 'flex',
        listStyleType: 'none',
        borderBottom: `solid 1px ${theme.palette.divider}`,
        [theme.breakpoints.down('sm')]: { display: 'block' },
        '&.fade-enter': {
            opacity: 0.01,
            transform: 'translateX(100vw)',
        },
        '&.fade-enter-active': {
            opacity: 1,
            transform: 'translateX(0)',
            transition: 'all 500ms ease-in',
        },
        '&.fade-exit': {
            opacity: 1,
            transform: 'translateX(0)',
        },
        '&.fade-exit-active': {
            opacity: 0.01,
            transform: 'translateX(100vw)',
            transition: 'all 500ms ease-in',
        },
    },
    [`${useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix} .${useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.index}`]: {
        [theme.breakpoints.down('md')]: { display: 'none' },
        marginRight: theme.spacing(1),
    },
    [`${useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix} .${useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.indexContainer}`]: {
        display: 'flex',
        paddingTop: '1em',
        marginRight: theme.spacing(1),
        alignItems: 'center',
    },
    [`${useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix} .${useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.form}`]: {
        flex: 2,
    },
    [`${useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix} .${useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.action}`]: {
        paddingTop: '0.5em',
    },
    [`${useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix} .${useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.leftIcon}`]: {
        marginRight: theme.spacing(1),
    },
}));
const DefaultLabelFn = index => index + 1;
