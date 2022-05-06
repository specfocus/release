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
const react_1 = require("react");
const jsx_runtime_1 = require("react/jsx-runtime");
const ChevronLeft_1 = __importDefault(require("@mui/icons-material/ChevronLeft"));
const ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Divider_1 = __importDefault(require("@mui/material/Divider"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const List_1 = __importDefault(require("@mui/material/List"));
const styles_1 = require("@mui/material/styles");
const react_2 = require("react");
const react_router_dom_1 = require("react-router-dom");
const recoil_1 = require("recoil");
const TranslatedTypography_1 = __importDefault(require("../../../components/TranslatedTypography"));
const style_1 = require("./style");
const state_1 = require("./state");
const store_1 = require("../../auth/account/store");
const Sidebar = (_a) => {
    var { children } = _a, stack = __rest(_a, ["children"]);
    const [sidebar, setSidebar] = (0, recoil_1.useRecoilState)(state_1.atomSidebar);
    const { banner, drawerOpen } = sidebar;
    const location = (0, react_router_dom_1.useLocation)();
    const theme = (0, styles_1.useTheme)();
    const hasRights = (0, store_1.useHasRights)();
    const handleDrawerShrink = (event) => {
        setSidebar(Object.assign(Object.assign({}, sidebar), { drawerOpen: !drawerOpen }));
    };
    const chevronRight = theme.direction === 'rtl' ? drawerOpen : !drawerOpen;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, Object.assign({ sx: { display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw' } }, stack, { children: [(0, jsx_runtime_1.jsxs)(style_1.Drawer, Object.assign({ PaperProps: { sx: { position: 'sticky' } }, sx: { flexGrow: 0, width: drawerOpen ? sidebar.drawerWidth : undefined }, variant: "permanent", open: drawerOpen }, { children: [(0, jsx_runtime_1.jsxs)(style_1.DrawerHeader, { children: [drawerOpen && banner, (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ onClick: handleDrawerShrink }, { children: chevronRight ? (0, jsx_runtime_1.jsx)(ChevronRight_1.default, {}, void 0) : (0, jsx_runtime_1.jsx)(ChevronLeft_1.default, {}, void 0) }), void 0)] }, void 0), sidebar && Array.isArray(sidebar.lists) && sidebar.lists.map((list, listIndex) => ((0, jsx_runtime_1.jsxs)(react_2.Fragment, { children: [drawerOpen && ((0, jsx_runtime_1.jsx)(Divider_1.default, {}, `divider-${listIndex}`)), hasRights(list.allow) && ((0, jsx_runtime_1.jsxs)(List_1.default, { children: [drawerOpen && list.subheader && ((0, jsx_runtime_1.jsx)(style_1.Subheader, Object.assign({ inset: true }, { children: (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ variant: "overline" }, { children: list.subheader }), void 0) }), `list-${listIndex}-subheader`)), list && Array.isArray(list.items) && list.items.map((item, itemIndex) => {
                                        const key = `list-${listIndex}-item-${itemIndex}`;
                                        const { allow, type } = item, props = __rest(item, ["allow", "type"]);
                                        if (allow && !hasRights(allow)) {
                                            return null;
                                        }
                                        switch (type) {
                                            case 'link':
                                                const match = (0, react_router_dom_1.matchPath)({ path: props.to, end: true, caseSensitive: false }, location.pathname);
                                                if (match) {
                                                    Object.assign(props, { selected: true });
                                                }
                                                return ((0, react_1.createElement)(style_1.LinkItem, Object.assign({}, props, { key: key })));
                                            default:
                                                return ((0, react_1.createElement)(style_1.Item, Object.assign({}, props, { key: key })));
                                        }
                                    })] }, `list-${listIndex}`))] }, `listroot-${listIndex}`)))] }), void 0), children] }), void 0));
};
exports.default = Sidebar;
