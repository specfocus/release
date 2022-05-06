"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const listActions_1 = require("../actions/listActions");
const defaultRecords = [];
/**
 * Get the list of selected items for a resource, and callbacks to change the selection
 *
 * @param resource The resource name, e.g. 'posts'
 *
 * @returns {Object} Destructure as [selectedIds, { select, toggle, clearSelection }].
 */
const useRecordSelection = (resource) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const selectedIds = (0, react_redux_1.useSelector)((reduxState) => reduxState.admin.resources[resource]
        ? reduxState.admin.resources[resource].list.selectedIds
        : defaultRecords, react_redux_1.shallowEqual);
    const selectionModifiers = (0, react_1.useMemo)(() => ({
        select: (newIds) => {
            dispatch((0, listActions_1.setListSelectedIds)(resource, newIds));
        },
        toggle: (id) => {
            dispatch((0, listActions_1.toggleListItem)(resource, id));
        },
        clearSelection: () => {
            dispatch((0, listActions_1.setListSelectedIds)(resource, []));
        },
    }), [dispatch, resource]);
    return [selectedIds, selectionModifiers];
};
exports.default = useRecordSelection;
