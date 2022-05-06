"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
/**
 * Get the loading status, i.e. a boolean indicating if at least one request is pending
 *
 * @see useLoad
 *
 * @example
 *
 * import { useLoading } from '../app';
 *
 * const MyComponent = () => {
 *      const loading = useLoading();
 *      return loading ? <Skeleton /> : <RealContent>;
 * }
 */
exports.default = () => (0, react_redux_1.useSelector)((state) => state.admin.loading > 0);
