import { ReactNode } from 'react';
import { ReferenceArrayInputContextValue } from './ReferenceArrayInputContext';
/**
 * Provider for the context which provides access to the useReferenceArrayInput features.
 *
 * @example
 * const ReferenceArrayInput = ({ children }) => {
 *     const controllerProps = useReferenceArrayInputController();
 *     return (
 *         <ReferenceArrayInputContextProvider value={controllerProps}>
 *             {children}
 *         </ReferenceArrayInputContextProvider>
 *     )
 * }
 */
export declare const ReferenceArrayInputContextProvider: ({ children, value, }: {
    children: ReactNode;
    value: ReferenceArrayInputContextValue;
}) => JSX.Element;
