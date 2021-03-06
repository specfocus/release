"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceContext = void 0;
const react_1 = require("react");
/**
 * Context to store the current resource information.
 *
 * Use the useResource() hook to read the context. That's what most components do in ../../app.
 *
 * @example
 *
 * import { useResourceContext, useTranslate } from '../../core';
 *
 * const MyCustomEditTitle = props => {
 *     const name = useResourceContext(props);
 *
 *     return (
 *         <h1>{translate(`${name}.name`)}</h1>
 *     );
 * };
 */
exports.ResourceContext = (0, react_1.createContext)(undefined);
