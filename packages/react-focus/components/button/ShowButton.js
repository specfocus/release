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
const prop_types_1 = __importDefault(require("prop-types"));
const RemoveRedEye_1 = __importDefault(require("@mui/icons-material/RemoveRedEye"));
const react_router_dom_1 = require("react-router-dom");
const core_1 = require("../../features/core");
const Button_1 = __importDefault(require("./Button"));
/**
 * Opens the Show view of a given record
 *
 * @example // basic usage
 * import { ShowButton } from '../../app';
 *
 * const CommentShowButton = ({ record }) => (
 *     <ShowButton basePath="/comments" label="Show comment" record={record} />
 * );
 */
const ShowButton = (props) => {
    const { basePath = '', icon = defaultIcon, label = 'ra.action.show', record, scrollToTop = true } = props, rest = __rest(props, ["basePath", "icon", "label", "record", "scrollToTop"]);
    const resource = (0, core_1.useResourceContext)();
    return ((0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ component: react_router_dom_1.Link, to: (0, react_1.useMemo)(() => ({
            pathname: record
                ? `${(0, core_1.linkToRecord)(basePath || `/${resource}`, record.id)}/show`
                : ''
        }), [basePath, record, resource]), state: { _scrollToTop: scrollToTop }, label: label, onClick: stopPropagation }, rest, { children: icon }), void 0));
};
const defaultIcon = (0, jsx_runtime_1.jsx)(RemoveRedEye_1.default, {}, void 0);
// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();
ShowButton.propTypes = {
    basePath: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
    record: prop_types_1.default.any,
    scrollToTop: prop_types_1.default.bool,
};
const PureShowButton = (0, react_1.memo)(ShowButton, (props, nextProps) => (props.record && nextProps.record
    ? props.record.id === nextProps.record.id
    : props.record == nextProps.record) && // eslint-disable-line eqeqeq
    props.basePath === nextProps.basePath &&
    props.to === nextProps.to &&
    props.disabled === nextProps.disabled);
exports.default = PureShowButton;
