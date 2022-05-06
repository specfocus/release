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
const prop_types_1 = __importDefault(require("prop-types"));
const List_1 = __importDefault(require("@mui/icons-material/List"));
const react_router_dom_1 = require("react-router-dom");
const core_1 = require("../../features/core");
const Button_1 = __importDefault(require("./Button"));
/**
 * Opens the List view of a given resource
 *
 * @example // basic usage
 * import { ListButton } from '../../app';
 *
 * const CommentListButton = () => (
 *     <ListButton basePath="/comments" label="Comments" />
 * );
 *
 * @example // linking back to the list from the Edit view
 * import { TopToolbar, ListButton, ShowButton, Edit } from '../../app';
 *
 * const PostEditActions = ({ basePath, record, resource }) => (
 *     <TopToolbar>
 *         <ListButton basePath={basePath} />
 *         <ShowButton basePath={basePath} record={record} />
 *     </TopToolbar>
 * );
 *
 * export const PostEdit = (props) => (
 *     <Edit actions={<PostEditActions />} {...props}>
 *         ...
 *     </Edit>
 * );
 */
const ListButton = (props) => {
    const { basePath = '', icon = defaultIcon, label = 'ra.action.list' } = props, rest = __rest(props, ["basePath", "icon", "label"]);
    const resource = (0, core_1.useResourceContext)();
    return ((0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ component: react_router_dom_1.Link, to: basePath || `/${resource}`, label: label }, rest, { children: icon }), void 0));
};
const defaultIcon = (0, jsx_runtime_1.jsx)(List_1.default, {}, void 0);
ListButton.propTypes = {
    basePath: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
};
exports.default = ListButton;
