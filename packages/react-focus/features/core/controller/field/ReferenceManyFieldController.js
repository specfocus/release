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
exports.ReferenceManyFieldController = void 0;
const useReferenceManyFieldController_1 = __importDefault(require("./useReferenceManyFieldController"));
/**
 * Render prop version of the useReferenceManyFieldController hook.
 *
 * @see useReferenceManyFieldController
 */
const ReferenceManyFieldController = (props) => {
    const { children, page = 1, perPage = 25 } = props, rest = __rest(props, ["children", "page", "perPage"]);
    const controllerProps = (0, useReferenceManyFieldController_1.default)(Object.assign({ page,
        perPage }, rest));
    return children(controllerProps);
};
exports.ReferenceManyFieldController = ReferenceManyFieldController;
exports.default = exports.ReferenceManyFieldController;
