"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const listActions_1 = require("../actions/listActions");
/**
 * State-like hook for controlling the expanded state of a list item
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {string|integer} id The record identifier, e.g. 123
 *
 * @returns {Object} Destructure as [expanded, toggleExpanded].
 *
 * @example
 *
 * const [expanded, toggleExpanded] = useExpanded('posts', 123);
 * const expandIcon = expanded ? ExpandLess : ExpandMore;
 * const onExpandClick = () => toggleExpanded();
 */
const useExpanded = (resource, id) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const expandedList = (0, react_redux_1.useSelector)((reduxState) => reduxState.admin.resources[resource]
        ? reduxState.admin.resources[resource].list.expanded
        : undefined);
    const expanded = expandedList === undefined
        ? false
        : expandedList.map(el => el == id).indexOf(true) !== -1; // eslint-disable-line eqeqeq
    const toggleExpanded = (0, react_1.useCallback)(() => {
        dispatch((0, listActions_1.toggleListItemExpand)(resource, id));
    }, [dispatch, resource, id]);
    return [expanded, toggleExpanded];
};
exports.default = useExpanded;
