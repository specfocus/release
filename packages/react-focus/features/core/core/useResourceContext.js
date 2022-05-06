"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResourceContext = void 0;
const react_1 = require("react");
const ResourceContext_1 = require("./ResourceContext");
/**
 * Hook to read the resource from the ResourceContext.
 *
 * Must be used within a <ResourceContextProvider> (e.g. as a descendent of <Resource>
 * or any reference related components), or called with a resource prop.
 *
 * @example
 *
 * const ResourceName = (props) => {
 *   const resource = useResourceContext(props);
 *   const getResourceLabel = useGetResourceLabel();
 *   return <>{getResourceLabel(resource, 1)}</>;
 * }
 *
 * // use it in a resource context
 * const MyComponent = () => (
 *   <ResourceContextProvider value="posts">
 *     <ResourceName />
 *     ...
 *   </ResourceContextProvider>
 * );
 *
 * // override resource via props
 * const MyComponent = () => (
 *   <>
 *     <ResourceName resource="posts"/>
 *     ...
 *   </>
 * );
 *
 * @returns {ResourceContextValue} The resource name, e.g. 'posts'
 */
const useResourceContext = (props) => {
    const context = (0, react_1.useContext)(ResourceContext_1.ResourceContext);
    return (props && props.resource) || context;
};
exports.useResourceContext = useResourceContext;
