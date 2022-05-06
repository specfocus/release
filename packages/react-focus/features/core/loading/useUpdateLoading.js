"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const fetchActions_1 = require("../actions/fetchActions");
/**
 * Update the loading count, which starts or stops the loading indicator.
 *
 * To be used to show the loading indicator when you don't use the dataProvider.
 *
 * @return {Object} startLoading and stopLoading callbacks
 *
 * @example
 * import { useUpdateLoading } from '../app'
 *
 * const MyComponent = () => {
 *      const { startLoading, stopLoading } = useUpdateLoading();
 *      useEffect(() => {
 *          startLoading();
 *          fetch('http://my.domain.api/foo')
 *              .finally(() => stopLoading());
 *      }, []);
 *      return <span>Foo</span>;
 * }
 */
exports.default = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const startLoading = (0, react_1.useCallback)(() => {
        dispatch((0, fetchActions_1.fetchStart)());
    }, [dispatch]);
    const stopLoading = (0, react_1.useCallback)(() => {
        dispatch((0, fetchActions_1.fetchEnd)());
    }, [dispatch]);
    return { startLoading, stopLoading };
};
