/// <reference types="react" />
import { ShowControllerProps } from './useShowController';
/**
 * Context to store the result of the useShowController() hook.
 *
 * Use the useShowContext() hook to read the context. That's what the Show components do in ../../app.
 *
 * @example
 *
 * import { useShowController, ShowContextProvider } from '../../../core';
 *
 * const Show = props => {
 *     const controllerProps = useShowController(props);
 *     return (
 *         <ShowContextProvider value={controllerProps}>
 *             ...
 *         </ShowContextProvider>
 *     );
 * };
 */
export declare const ShowContext: import("react").Context<ShowControllerProps<import("../..").Record>>;
