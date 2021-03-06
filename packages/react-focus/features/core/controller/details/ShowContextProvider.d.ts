import { ReactElement } from 'react';
import { ShowControllerProps } from './useShowController';
/**
 * Create a Show Context.
 *
 * @example
 *
 * const MyShow = (props) => {
 *     const controllerProps = useShowController(props);
 *     return (
 *         <ShowContextProvider value={controllerProps}>
 *             <MyShowView>
 *         </ShowContextProvider>
 *     );
 * };
 *
 * const MyShowView = () => {
 *     const record = useRecordContext();
 * }
 *
 * @see ShowContext
 * @see RecordContext
 */
export declare const ShowContextProvider: ({ children, value, }: {
    children: ReactElement;
    value: ShowControllerProps;
}) => JSX.Element;
