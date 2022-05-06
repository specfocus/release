"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const prop_types_1 = __importDefault(require("prop-types"));
const React = __importStar(require("react"));
const core_1 = require("../../../features/core");
const FilterButton_1 = __importDefault(require("./FilterButton"));
const FilterForm_1 = __importDefault(require("./FilterForm"));
const PREFIX = 'RaFilter';
const classes = {
    button: `${PREFIX}-button`,
    form: `${PREFIX}-form`,
};
/**
 * Filter button/form combo
 *
 * @example
 *
 * const PostFilter = (props) => (
 *     <Filter {...props}>
 *         <TextInput label="Search" source="q" alwaysOn />
 *         <TextInput label="Title" source="title" defaultValue="Hello, World!" />
 *     </Filter>
 * );
 *
 * export const PostList = (props) => (
 *     <List {...props} filters={<PostFilter />}>
 *         ...
 *     </List>
 * );
 *
 */
const Filter = (props) => {
    const { resource, showFilter, hideFilter, setFilters, displayedFilters, filterValues, } = (0, core_1.useListContext)(props);
    const renderButton = () => {
        const { context, children, variant } = props, rest = __rest(props, ["context", "children", "variant"]);
        return ((0, jsx_runtime_1.jsx)(FilterButton_1.default, Object.assign({ className: classes.button, resource: resource, filters: React.Children.toArray(children), showFilter: showFilter, displayedFilters: displayedFilters, filterValues: filterValues }, (0, core_1.sanitizeListRestProps)(rest)), void 0));
    };
    const renderForm = () => {
        const { context, children } = props, rest = __rest(props, ["context", "children"]);
        return ((0, jsx_runtime_1.jsx)(FilterForm_1.default, Object.assign({ className: classes.form, resource: resource, filters: React.Children.toArray(children), hideFilter: hideFilter, displayedFilters: displayedFilters, initialValues: filterValues, setFilters: setFilters }, (0, core_1.sanitizeListRestProps)(rest)), void 0));
    };
    return props.context === 'button' ? renderButton() : renderForm();
};
Filter.propTypes = {
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    context: prop_types_1.default.oneOf(['form', 'button']),
};
exports.default = Filter;
