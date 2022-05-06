"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const util_1 = require("../util");
const defaultSelection = [];
/**
 * Hooks to provide selection state.
 *
 * The names of the return values match the ListContext interface
 *
 * @example
 *
 * const { selectedIds, onSelect, onToggleItem, onUnselectItems } = useSelectionState();
 *
 */
const useSelectionState = (initialSelection = defaultSelection) => {
    const [selectedIds, setSelectedIds] = (0, util_1.useSafeSetState)(initialSelection);
    const isFirstRender = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setSelectedIds(initialSelection);
    }, [initialSelection, setSelectedIds]);
    const onSelect = (0, react_1.useCallback)((newIds) => {
        setSelectedIds(newIds);
    }, [setSelectedIds]);
    const onToggleItem = (0, react_1.useCallback)((id) => {
        setSelectedIds(previousState => {
            const index = previousState.indexOf(id);
            if (index > -1) {
                return [
                    ...previousState.slice(0, index),
                    ...previousState.slice(index + 1),
                ];
            }
            else {
                return [...previousState, id];
            }
        });
    }, [setSelectedIds]);
    const onUnselectItems = (0, react_1.useCallback)(() => {
        setSelectedIds([]);
    }, [setSelectedIds]);
    return {
        selectedIds,
        onSelect,
        onToggleItem,
        onUnselectItems,
    };
};
exports.default = useSelectionState;
