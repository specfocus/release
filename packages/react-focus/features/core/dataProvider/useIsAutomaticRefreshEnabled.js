"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const useIsAutomaticRefreshEnabled = () => {
    const automaticRefreshEnabled = (0, react_redux_1.useSelector)(state => state.admin.ui.automaticRefreshEnabled);
    return automaticRefreshEnabled;
};
exports.default = useIsAutomaticRefreshEnabled;
