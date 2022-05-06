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
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const ListItemAvatar_1 = __importDefault(require("@mui/material/ListItemAvatar"));
const ListItemSecondaryAction_1 = __importDefault(require("@mui/material/ListItemSecondaryAction"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const Placeholder_1 = __importDefault(require("./Placeholder"));
const core_1 = require("../../features/core");
const PREFIX = 'RaSimpleListLoading';
const classes = {
    primary: `${PREFIX}-primary`,
    tertiary: `${PREFIX}-tertiary`,
};
const StyledList = (0, styles_1.styled)(List_1.default)(({ theme }) => ({
    [`& .${classes.primary}`]: {
        width: '30vw',
        display: 'inline-block',
        marginBottom: theme.spacing(),
    },
    [`& .${classes.tertiary}`]: {
        float: 'right',
        opacity: 0.541176,
        minWidth: '10vw',
    },
}));
const times = (nbChildren, fn) => Array.from({ length: nbChildren }, (_, key) => fn(key));
const SimpleListLoading = (props) => {
    const { classes: classesOverride, className, hasLeftAvatarOrIcon, hasRightAvatarOrIcon, hasSecondaryText, hasTertiaryText, nbFakeLines = 5 } = props, rest = __rest(props, ["classes", "className", "hasLeftAvatarOrIcon", "hasRightAvatarOrIcon", "hasSecondaryText", "hasTertiaryText", "nbFakeLines"]);
    const oneSecondHasPassed = (0, core_1.useTimeout)(1000);
    return oneSecondHasPassed ? ((0, jsx_runtime_1.jsx)(StyledList, Object.assign({ className: className }, rest, { children: times(nbFakeLines, key => ((0, jsx_runtime_1.jsxs)(ListItem_1.default, { children: [hasLeftAvatarOrIcon && ((0, jsx_runtime_1.jsx)(ListItemAvatar_1.default, { children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { children: "\u00A0" }, void 0) }, void 0)), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Placeholder_1.default, { className: classes.primary }, void 0), hasTertiaryText && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: classes.tertiary }, { children: (0, jsx_runtime_1.jsx)(Placeholder_1.default, {}, void 0) }), void 0))] }, void 0), secondary: hasSecondaryText ? (0, jsx_runtime_1.jsx)(Placeholder_1.default, {}, void 0) : undefined }, void 0), hasRightAvatarOrIcon && ((0, jsx_runtime_1.jsx)(ListItemSecondaryAction_1.default, { children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { children: "\u00A0" }, void 0) }, void 0))] }, key))) }), void 0)) : null;
};
SimpleListLoading.propTypes = {
    className: prop_types_1.default.string,
    hasLeftAvatarOrIcon: prop_types_1.default.bool,
    hasRightAvatarOrIcon: prop_types_1.default.bool,
    hasSecondaryText: prop_types_1.default.bool,
    hasTertiaryText: prop_types_1.default.bool,
    nbFakeLines: prop_types_1.default.number,
};
exports.default = SimpleListLoading;
