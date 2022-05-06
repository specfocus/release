"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResourceDefinition = void 0;
const react_redux_1 = require("react-redux");
const defaults_1 = __importDefault(require("lodash/defaults"));
const reducer_1 = require("../reducer");
const useResourceContext_1 = require("./useResourceContext");
const react_1 = require("react");
/**
 * Hook which returns the definition of the requested resource
 */
const useResourceDefinition = (props) => {
    const resource = (0, useResourceContext_1.useResourceContext)(props);
    const resources = (0, react_redux_1.useSelector)(reducer_1.getResources);
    const { hasCreate, hasEdit, hasList, hasShow } = props;
    const definition = (0, react_1.useMemo)(() => {
        const definitionFromRedux = resources.find(r => (r === null || r === void 0 ? void 0 : r.name) === resource);
        return (0, defaults_1.default)({}, {
            hasCreate,
            hasEdit,
            hasList,
            hasShow,
        }, definitionFromRedux);
    }, [resource, resources, hasCreate, hasEdit, hasList, hasShow]);
    return definition;
};
exports.useResourceDefinition = useResourceDefinition;
