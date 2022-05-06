"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const css_mediaquery_1 = __importDefault(require("css-mediaquery"));
const styles_1 = require("@mui/material/styles");
/**
 * Test utility to simulate a device form factor for server-side mediaQueries
 *
 * Do not use inside a browser.
 *
 * @example
 *
 * <DeviceTestWrapper width="sm">
 *     <MyResponsiveComponent />
 * <DeviceTestWrapper>
 */
const DeviceTestWrapper = ({ width = 'md', children, }) => {
    const theme = (0, styles_1.createTheme)();
    // Use https://github.com/ericf/css-mediaquery as polyfill.
    const ssrMatchMedia = query => ({
        matches: css_mediaquery_1.default.match(query, {
            // The estimated CSS width of the browser.
            // For the sake of this demo, we are using a fixed value.
            // In production, you can look into client-hint https://caniuse.com/#search=client%20hint
            // or user-agent resolution.
            width: theme.breakpoints.values[width],
        }),
    });
    return ((0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, Object.assign({ theme: Object.assign(Object.assign({}, theme), { components: {
                MuiUseMediaQuery: {
                    defaultProps: {
                        ssrMatchMedia,
                        matchMedia: ssrMatchMedia,
                    },
                },
            } }) }, { children: children }), void 0));
};
exports.default = DeviceTestWrapper;
