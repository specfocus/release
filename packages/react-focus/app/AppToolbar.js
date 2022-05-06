"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppToolbar = exports.appToolbar = exports.APP_TOOLBAR = void 0;
const recoil_1 = require("recoil");
exports.APP_TOOLBAR = 'appToolbar';
exports.appToolbar = (0, recoil_1.atom)({
    key: exports.APP_TOOLBAR,
    default: {}, // default value (aka initial value)
});
const useAppToolbar = () => (0, recoil_1.useRecoilValue)(exports.appToolbar);
exports.useAppToolbar = useAppToolbar;
