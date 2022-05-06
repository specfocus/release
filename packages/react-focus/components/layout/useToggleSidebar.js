"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggleSidebar = void 0;
const react_redux_1 = require("react-redux");
const core_1 = require("../../features/core");
/**
 * A hook that returns the sidebar open state and a function to toggle it.
 * @returns A tuple containing a boolean indicating whether the sidebar is open or not and a function to toggle the sidebar.
 * @example
 * const MyButton = () => {
 *     const [sidebarOpen, toggleSidebar] = useToggleSidebar();
 *     return (
 *         <Button
 *             color="inherit"
 *             onClick={() => toggleSidebar()}
 *         >
 *             {open ? 'Open' : 'Close'}
 *         </Button>
 *     );
 */
const useToggleSidebar = () => {
    const open = (0, react_redux_1.useSelector)(state => state.admin.ui.sidebarOpen);
    const dispatch = (0, react_redux_1.useDispatch)();
    const toggle = () => dispatch((0, core_1.toggleSidebar)());
    return [open, toggle];
};
exports.useToggleSidebar = useToggleSidebar;
