"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const auth_1 = require("../components/auth");
const layout_1 = require("../components/layout");
const core_1 = require("../features/core");
const AppUI = props => (0, jsx_runtime_1.jsx)(core_1.BaseAppUI, Object.assign({}, props), void 0);
AppUI.defaultProps = {
    layout: layout_1.Layout,
    catchAll: layout_1.NotFound,
    loading: layout_1.LoadingPage,
    loginPage: auth_1.Login,
    logout: auth_1.Logout,
};
exports.default = AppUI;
