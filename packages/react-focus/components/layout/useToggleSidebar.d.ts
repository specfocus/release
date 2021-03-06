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
export declare const useToggleSidebar: () => UseToggleSidebarResult;
export declare type UseToggleSidebarResult = [boolean, () => void];
