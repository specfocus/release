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
exports.TextWide = exports.TextLarge = exports.TextMedium = exports.TextSmall = exports.DateMedium = exports.DateSmall = exports.DateText = exports.Text = exports.InputLabelProps = exports.InputProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/styles");
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const TranslatedTextField_1 = __importDefault(require("../../../components/TranslatedTextField"));
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const date_fns_1 = require("date-fns");
const useDatagridStyles = (0, styles_1.makeStyles)((theme) => ({
    table: {
        tableLayout: 'auto',
        backgroundColor: theme.palette.mode !== 'dark' ? '#DDD' : '#555'
    },
    thead: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        height: theme.spacing(6),
        zIndex: 2,
    },
    tbody: {},
    headerRow: {
        borderBottom: '0px solid transparent',
        backgroundColor: '#FFF'
    },
    headerCell: {
        borderBottom: '0px solid transparent',
        height: theme.spacing(6),
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        wordWrap: 'break-word',
        '&:first-child': {
            borderTopLeftRadius: theme.shape.borderRadius,
        },
        '&:last-child': {
            borderTopRightRadius: theme.shape.borderRadius,
        },
    },
    checkbox: {},
    row: {
        backgroundColor: '#FFF'
    },
    clickableRow: {
        cursor: 'pointer',
    },
    rowEven: {},
    rowOdd: {},
    rowCell: {},
    expandHeader: {
        padding: 0,
        width: theme.spacing(6),
    },
    expandIconCell: {
        width: theme.spacing(6),
    },
    expandIcon: {
        padding: theme.spacing(1),
        transform: 'rotate(-90deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expanded: {
        transform: 'rotate(0deg)',
    }
}), { name: 'Datagrid' });
exports.InputProps = { style: { fontSize: '1.0em' } };
exports.InputLabelProps = { style: { fontSize: '1.2em' } };
const Text = (_a) => {
    var { xs, sm, md, lg, xl, tooltip, value } = _a, props = __rest(_a, ["xs", "sm", "md", "lg", "xl", "tooltip", "value"]);
    return !tooltip ? ((0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: xs, sm: sm, md: md, lg: lg, xl: xl }, { children: (0, jsx_runtime_1.jsx)(TranslatedTextField_1.default, Object.assign({ fullWidth: true, value: value || typeof value === 'number' ? String(value) : '', InputProps: Object.assign(Object.assign({}, exports.InputProps), { readOnly: true, disableUnderline: true }), InputLabelProps: Object.assign(Object.assign({}, exports.InputLabelProps), { shrink: true }) }, props, { variant: "standard" }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: xs, sm: sm, md: md, lg: lg, xl: xl }, { children: (0, jsx_runtime_1.jsx)(Tooltip_1.default, Object.assign({ title: tooltip }, { children: (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(TranslatedTextField_1.default, Object.assign({ fullWidth: true, value: value || typeof value === 'number' ? String(value) : '', InputProps: Object.assign(Object.assign({}, exports.InputProps), { readOnly: true, disableUnderline: true }), InputLabelProps: Object.assign(Object.assign({}, exports.InputLabelProps), { shrink: true }) }, props, { variant: "standard" }), void 0) }, void 0) }), void 0) }), void 0));
};
exports.Text = Text;
const DateText = (_a) => {
    var { value } = _a, props = __rest(_a, ["value"]);
    const date = new Date(String(value));
    const now = new Date();
    const ok = date.toString() !== 'Invalid Date';
    return ((0, jsx_runtime_1.jsx)(exports.Text, Object.assign({}, props, { value: value, tooltip: ok ? `${(0, date_fns_1.format)(date, 'EEEE, MMMM do, yyyy')} (${(0, date_fns_1.formatDistance)(date, now)})` : '' }), void 0));
};
exports.DateText = DateText;
const DateSmall = (props) => ((0, jsx_runtime_1.jsx)(exports.DateText, Object.assign({ xs: 12, lg: 4 }, props), void 0));
exports.DateSmall = DateSmall;
const DateMedium = (props) => ((0, jsx_runtime_1.jsx)(exports.DateText, Object.assign({ xs: 12, lg: 6 }, props), void 0));
exports.DateMedium = DateMedium;
const TextSmall = (props) => ((0, jsx_runtime_1.jsx)(exports.Text, Object.assign({ xs: 12, lg: 4 }, props), void 0));
exports.TextSmall = TextSmall;
const TextMedium = (props) => ((0, jsx_runtime_1.jsx)(exports.Text, Object.assign({ xs: 12, lg: 6 }, props), void 0));
exports.TextMedium = TextMedium;
const TextLarge = (props) => ((0, jsx_runtime_1.jsx)(exports.Text, Object.assign({ xs: 12, lg: 8 }, props), void 0));
exports.TextLarge = TextLarge;
const TextWide = (props) => ((0, jsx_runtime_1.jsx)(exports.Text, Object.assign({ xs: 12 }, props), void 0));
exports.TextWide = TextWide;
exports.default = useDatagridStyles;
