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
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const core_1 = require("../../features/core");
const SimpleListLoading_1 = __importDefault(require("./SimpleListLoading"));
const PREFIX = 'RaSimpleList';
const classes = {
    tertiary: `${PREFIX}-tertiary`,
};
const Root = (0, styles_1.styled)(material_1.List)({
    [`& .${classes.tertiary}`]: { float: 'right', opacity: 0.541176 },
});
/**
 * The <SimpleList> component renders a list of records as a material-ui <List>.
 * It is usually used as a child of ../../app's <List> and <ReferenceManyField> components.
 *
 * Also widely used on Mobile.
 *
 * Props:
 * - primaryText: function returning a React element (or some text) based on the record
 * - secondaryText: same
 * - tertiaryText: same
 * - leftAvatar: function returning a React element based on the record
 * - leftIcon: same
 * - rightAvatar: same
 * - rightIcon: same
 * - linkType: 'edit' or 'show', or a function returning 'edit' or 'show' based on the record
 * - rowStyle: function returning a style object based on (record, index)
 *
 * @example // Display all posts as a List
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = (props) => (
 *     <List {...props}>
 *         <SimpleList
 *             primaryText={record => record.title}
 *             secondaryText={record => `${record.views} views`}
 *             tertiaryText={record =>
 *                 new Date(record.published_at).toLocaleDateString()
 *             }
 *             rowStyle={postRowStyle}
 *          />
 *     </List>
 * );
 */
const SimpleList = (props) => {
    const { className, hasBulkActions, leftAvatar, leftIcon, linkType = 'edit', primaryText, rightAvatar, rightIcon, secondaryText, tertiaryText, rowStyle } = props, rest = __rest(props, ["className", "hasBulkActions", "leftAvatar", "leftIcon", "linkType", "primaryText", "rightAvatar", "rightIcon", "secondaryText", "tertiaryText", "rowStyle"]);
    const { basePath, data, ids, loaded, total } = (0, core_1.useListContext)(props);
    if (loaded === false) {
        return ((0, jsx_runtime_1.jsx)(SimpleListLoading_1.default, { className: className, hasLeftAvatarOrIcon: !!leftIcon || !!leftAvatar, hasRightAvatarOrIcon: !!rightIcon || !!rightAvatar, hasSecondaryText: !!secondaryText, hasTertiaryText: !!tertiaryText }, void 0));
    }
    const renderAvatar = (id, avatarCallback) => {
        const avatarValue = avatarCallback(data[id], id);
        if (typeof avatarValue === 'string' &&
            (avatarValue.startsWith('http') || avatarValue.startsWith('data:'))) {
            return (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: avatarValue }, void 0);
        }
        else {
            return (0, jsx_runtime_1.jsx)(material_1.Avatar, { children: avatarValue }, void 0);
        }
    };
    return total > 0 ? ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: className }, (0, core_1.sanitizeListRestProps)(rest), { children: ids.map((id, rowIndex) => ((0, jsx_runtime_1.jsx)(core_1.RecordContextProvider, Object.assign({ value: data[id] }, { children: (0, jsx_runtime_1.jsx)(material_1.ListItem, { children: (0, jsx_runtime_1.jsxs)(LinkOrNot, Object.assign({ linkType: linkType, basePath: basePath, id: id, record: data[id], style: rowStyle
                        ? rowStyle(data[id], rowIndex)
                        : undefined }, { children: [leftIcon && ((0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: leftIcon(data[id], id) }, void 0)), leftAvatar && ((0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: renderAvatar(id, leftAvatar) }, void 0)), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: (0, jsx_runtime_1.jsxs)("div", { children: [(0, react_1.isValidElement)(primaryText)
                                        ? primaryText
                                        : primaryText(data[id], id), !!tertiaryText &&
                                        ((0, react_1.isValidElement)(tertiaryText) ? (tertiaryText) : ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: classes.tertiary }, { children: tertiaryText(data[id], id) }), void 0)))] }, void 0), secondary: !!secondaryText &&
                                ((0, react_1.isValidElement)(secondaryText)
                                    ? secondaryText
                                    : secondaryText(data[id], id)) }, void 0), (rightAvatar || rightIcon) && ((0, jsx_runtime_1.jsxs)(material_1.ListItemSecondaryAction, { children: [rightAvatar && ((0, jsx_runtime_1.jsx)(material_1.Avatar, { children: renderAvatar(id, rightAvatar) }, void 0)), rightIcon && ((0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: rightIcon(data[id], id) }, void 0))] }, void 0))] }), void 0) }, void 0) }), id))) }), void 0)) : null;
};
SimpleList.propTypes = {
    className: prop_types_1.default.string,
    leftAvatar: prop_types_1.default.func,
    leftIcon: prop_types_1.default.func,
    linkType: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    primaryText: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.element]),
    rightAvatar: prop_types_1.default.func,
    rightIcon: prop_types_1.default.func,
    secondaryText: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.element]),
    tertiaryText: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.element]),
    rowStyle: prop_types_1.default.func,
};
const LinkOrNot = (props) => {
    const { classes: classesOverride, linkType, basePath, id, children, record } = props, rest = __rest(props, ["classes", "linkType", "basePath", "id", "children", "record"]);
    const link = typeof linkType === 'function' ? linkType(record, id) : linkType;
    return link === 'edit' || link === true ? (
    // @ts-ignore
    (0, jsx_runtime_1.jsx)(material_1.ListItemButton, Object.assign({ component: react_router_dom_1.Link, to: (0, core_1.linkToRecord)(basePath, id) }, rest, { children: children }), void 0)) : link === 'show' ? (
    // @ts-ignore
    (0, jsx_runtime_1.jsx)(material_1.ListItemButton, Object.assign({ component: react_router_dom_1.Link, to: `${(0, core_1.linkToRecord)(basePath, id)}/show` }, rest, { children: children }), void 0)) : link !== false ? (
    // @ts-ignore
    (0, jsx_runtime_1.jsx)(material_1.ListItemButton, Object.assign({ component: react_router_dom_1.Link, to: link }, rest, { children: children }), void 0)) : ((0, jsx_runtime_1.jsx)(material_1.ListItemText
    // @ts-ignore
    , Object.assign({ 
        // @ts-ignore
        component: "div" }, rest, { children: children }), void 0));
};
exports.default = SimpleList;
