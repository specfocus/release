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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowController = void 0;
const useShowController_1 = require("./useShowController");
const i18n_1 = require("../../i18n");
/**
 * Render prop version of the useShowController hook
 *
 * @see useShowController
 * @example
 *
 * const ShowView = () => <div>...</div>
 * const MyShow = props => (
 *     <ShowController {...props}>
 *         {controllerProps => <ShowView {...controllerProps} {...props} />}
 *     </ShowController>
 * );
 */
const ShowController = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const controllerProps = (0, useShowController_1.useShowController)(props);
    const translate = (0, i18n_1.useTranslate)(); // injected for backwards compatibility
    return children(Object.assign({ translate }, controllerProps));
};
exports.ShowController = ShowController;
