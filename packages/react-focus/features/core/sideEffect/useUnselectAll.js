"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const util_1 = require("../util");
/**
 * Hook for Unselect All Side Effect
 *
 * @example
 *
 * const unselectAll = useUnselectAll('posts');
 * unselectAll();
 */
const useUnselectAll = (resource1) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    return (0, react_1.useCallback)((resource2) => {
        (0, util_1.warning)(!resource2 && !resource1, "You didn't specify the resource at initialization (useUnselectAll('posts')) nor when using the callback (unselectAll('posts'))");
        dispatch((0, actions_1.setListSelectedIds)(resource2 || resource1, []));
    }, [dispatch, resource1]);
};
exports.default = useUnselectAll;
