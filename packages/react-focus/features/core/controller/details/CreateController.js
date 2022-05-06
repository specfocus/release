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
exports.CreateController = void 0;
const i18n_1 = require("../../i18n");
const useCreateController_1 = require("./useCreateController");
/**
 * Render prop version of the useCreateController hook
 *
 * @see useCreateController
 * @example
 *
 * const CreateView = () => <div>...</div>
 * const MyCreate = props => (
 *     <CreateController {...props}>
 *         {controllerProps => <CreateView {...controllerProps} {...props} />}
 *     </CreateController>
 * );
 */
const CreateController = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const controllerProps = (0, useCreateController_1.useCreateController)(props);
    const translate = (0, i18n_1.useTranslate)(); // injected for backwards compatibility
    return children(Object.assign({ translate }, controllerProps));
};
exports.CreateController = CreateController;
