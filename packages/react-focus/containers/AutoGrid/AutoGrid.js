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
const Box_1 = __importDefault(require("@mui/material/Box"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const styles_1 = require("@mui/material/styles");
const useMediaQuery_1 = __importDefault(require("@mui/material/useMediaQuery"));
const react_1 = require("react");
const presets_1 = require("./presets");
const shrink = ([width, ...sizes]) => {
    return [
        Math.max(1, width - 1),
        ...sizes.map(([w, h]) => [Math.max(1, w - 1), h])
    ];
};
function AutoGrid(_a) {
    var { config, children } = _a, props = __rest(_a, ["config", "children"]);
    const theme = (0, styles_1.useTheme)();
    const lg = (0, useMediaQuery_1.default)(theme.breakpoints.up('lg'));
    const md = (0, useMediaQuery_1.default)(theme.breakpoints.up('md'));
    if (config.length === 1) {
        const [width] = config;
        const min = (n) => Math.min(12, Math.max(1, Math.floor(n)));
        const sizes = { xs: 12 };
        if (width > 1) {
            const lg = min(12 / width);
            Object.assign(sizes, { lg });
        }
        if (width > 2) {
            const md = min(3 * 12 / (2 * width));
            Object.assign(sizes, { md });
        }
        return ((0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ spacing: 4, container: true }, { children: react_1.Children.toArray(children).map((child, index) => {
                return ((0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({}, sizes, { item: true }, { children: child }), `grid-item-${index}`));
            }) }), void 0));
    }
    if (!lg) {
        config = shrink(config);
    }
    if (!md) {
        config = shrink(config);
    }
    const system = {
        sx: Object.assign({ gridColumnGap: 10, gridRowGap: 10, padding: 0, spacing: 0 }, (0, presets_1.generateSystemProps)(config)),
        lg: (0, presets_1.generateSystemProps)(config)
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({}, system, props, { children: react_1.Children.toArray(children).map((child, index) => {
            return ((0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ sx: { gridArea: `a${index}` } }, { children: child }), `box-item-${index}`));
        }) }), void 0));
}
exports.default = AutoGrid;
