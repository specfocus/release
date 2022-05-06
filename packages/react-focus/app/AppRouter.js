"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("../features/core");
const layout_1 = require("../components/layout");
const AppRouter = (props) => (0, jsx_runtime_1.jsx)(core_1.BaseAppRouter, Object.assign({}, props), void 0);
AppRouter.defaultProps = {
    loading: layout_1.LoadingPage,
};
exports.default = AppRouter;
