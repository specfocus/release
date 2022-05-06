"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const react_redux_1 = require("react-redux");
const core_1 = require("../../features/core");
/**
 *@deprecated use BulkDeleteButton instead
 */
const BulkDeleteAction = props => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const resource = (0, core_1.useResourceContext)(props);
    (0, react_1.useEffect)(() => {
        if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn('<BulkDeleteAction> is deprecated. Use the <BulkDeleteButton> component instead, via the bulkActionButton props.');
        }
        const { basePath, selectedIds, undoable, onExit } = props;
        if (undoable) {
            dispatch((0, core_1.startUndoable)((0, core_1.crudDeleteMany)(resource, selectedIds, basePath)));
        }
        else {
            dispatch((0, core_1.crudDeleteMany)(resource, selectedIds, basePath));
        }
        onExit();
    }, [dispatch, props, resource]);
    return null;
};
BulkDeleteAction.propTypes = {
    basePath: prop_types_1.default.string,
    label: prop_types_1.default.string,
    onExit: prop_types_1.default.func.isRequired,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
    translate: prop_types_1.default.func.isRequired,
    undoable: prop_types_1.default.bool,
};
BulkDeleteAction.defaultProps = {
    label: 'ra.action.delete',
    undoable: true,
};
exports.default = BulkDeleteAction;
