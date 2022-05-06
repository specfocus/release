"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSidebar = exports.appSidebar = exports.APP_SIDEBAR = void 0;
const recoil_1 = require("recoil");
exports.APP_SIDEBAR = 'appSidebar2';
exports.appSidebar = (0, recoil_1.atom)({
    key: exports.APP_SIDEBAR,
    default: {
        drawerOpen: true,
        drawerWidth: 240,
        lists: []
    }
});
const useAppSidebar = () => (0, recoil_1.useRecoilValue)(exports.appSidebar);
exports.useAppSidebar = useAppSidebar;
