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
exports.RowDensityMenu = exports.RowDensityButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
const Menu_1 = __importDefault(require("@mui/material/Menu"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const react_1 = require("react");
const TranslatedTooltip_1 = __importDefault(require("../../components/TranslatedTooltip"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const ViewRowComfortable_1 = __importDefault(require("../../icons/ViewRowComfortable"));
const ViewRowCompact_1 = __importDefault(require("../../icons/ViewRowCompact"));
const ViewRowStandard_1 = __importDefault(require("../../icons/ViewRowStandard"));
const options = {
    compact: ['Compact', ViewRowCompact_1.default],
    standard: ['Standard', ViewRowStandard_1.default],
    comfortable: ['Comfortable', ViewRowComfortable_1.default]
};
const RowDensityButton = (_a) => {
    var { toggle, value } = _a, props = __rest(_a, ["toggle", "value"]);
    const [label, ButtonIcon] = options[value];
    return ((0, jsx_runtime_1.jsx)(TranslatedTooltip_1.default, Object.assign({ title: `Density Selection: ${label}` }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ "aria-controls": "density-menu", "aria-haspopup": "true", color: "inherit", onClick: toggle }, props, { children: (0, jsx_runtime_1.jsx)(ButtonIcon, {}, void 0) }), void 0) }), "table-row-density-button"));
};
exports.RowDensityButton = RowDensityButton;
const RowDensityMenu = (_a) => {
    var { change, close, value } = _a, props = __rest(_a, ["change", "close", "value"]);
    console.log('RowDensityMenu');
    return ((0, jsx_runtime_1.jsx)(Menu_1.default, Object.assign({ id: "density-menu", variant: "selectedMenu", anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }, onClose: close, transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        }, keepMounted: true }, props, { children: Object.entries(options).map(([key, [label, Icon]]) => ((0, jsx_runtime_1.jsxs)(MenuItem_1.default, Object.assign({ onClick: event => {
                change(key);
                close();
            }, selected: key === value }, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(Icon, { fontSize: "small" }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ i18nKey: label, variant: "inherit" }, { children: label }), void 0)] }), `density-${key}`))) }), "table-row-density-menu"));
};
exports.RowDensityMenu = RowDensityMenu;
function useRowDensity() {
    const [rowDensityAnchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const [rowDensity, rowDensityChange] = (0, react_1.useState)('standard');
    const [rowDensityOpen, rowDensityToggle] = (0, react_1.useReducer)(state => !state, false);
    const rowDensityClick = (0, react_1.useCallback)((event) => {
        setAnchorEl(event.currentTarget);
        rowDensityToggle();
    }, [setAnchorEl, rowDensityToggle]);
    return {
        rowDensity,
        rowDensityAnchorEl,
        rowDensityChange,
        rowDensityClick,
        rowDensityOpen,
        rowDensityToggle
    };
}
exports.default = useRowDensity;
