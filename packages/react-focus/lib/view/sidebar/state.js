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
exports.useSidebarDrawerOpen = exports.selectorSidebarDawerOpen = exports.atomSidebar = void 0;
const maybe_1 = require("@specfocus/spec-focus/maybe");
const react_1 = __importDefault(require("react"));
const recoil_1 = require("recoil");
const recoil_2 = require("recoil");
exports.atomSidebar = (0, recoil_2.atom)({
    key: 'atomSidebar',
    default: {
        drawerOpen: true,
        drawerWidth: 240,
        lists: []
    }, // default value (aka initial value)
});
exports.selectorSidebarDawerOpen = (0, recoil_2.selector)({
    key: 'selectorAsideEntry',
    get: ({ get }) => {
        const { drawerOpen } = get(exports.atomSidebar);
        return drawerOpen || false;
    },
    set: ({ get, set }, open) => {
        if ((0, maybe_1.isNil)(open)) {
            const _a = get(exports.atomSidebar), { drawerOpen } = _a, next = __rest(_a, ["drawerOpen"]);
            set(exports.atomSidebar, Object.assign(Object.assign({}, next), { drawerOpen: !drawerOpen }));
        }
        else {
            set(exports.atomSidebar, Object.assign(Object.assign({}, get(exports.atomSidebar)), { drawerOpen: open }));
        }
    }
});
const useSidebarDrawerOpen = (open) => {
    const [previous, setSidebarDawerOpen] = (0, recoil_1.useRecoilState)(exports.selectorSidebarDawerOpen);
    react_1.default.useEffect(() => {
        setSidebarDawerOpen(open);
        return () => setSidebarDawerOpen(previous);
    }, []);
};
exports.useSidebarDrawerOpen = useSidebarDrawerOpen;
