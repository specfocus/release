"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDatagridContext = void 0;
const react_1 = require("react");
const DatagridContext_1 = __importDefault(require("./DatagridContext"));
const defaults_1 = __importDefault(require("lodash/defaults"));
const useDatagridContext = (props) => {
    const context = (0, react_1.useContext)(DatagridContext_1.default);
    return (0, react_1.useMemo)(() => (0, defaults_1.default)({}, props != null ? { isRowExpandable: props.isRowExpandable } : {}, context), [context, props]);
};
exports.useDatagridContext = useDatagridContext;
