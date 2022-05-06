/// <reference types="react" />
/**
 * Context to store the current resource information.
 *
 * Use the useResource() hook to read the context. That's what most components do in ../../app.
 *
 * @example
 *
 * import { useResourceContext, useTranslate } from '../../core';
 *
 * const MyCustomEditTitle = props => {
 *     const name = useResourceContext(props);
 *
 *     return (
 *         <h1>{translate(`${name}.name`)}</h1>
 *     );
 * };
 */
export declare const ResourceContext: import("react").Context<string>;
export declare type ResourceContextValue = string;
