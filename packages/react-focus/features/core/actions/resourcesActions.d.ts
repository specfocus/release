import { ResourceDefinition } from '../types';
export declare const REGISTER_RESOURCE = "REGISTER_RESOURCE";
export interface RegisterResourceAction {
    readonly type: typeof REGISTER_RESOURCE;
    readonly payload: ResourceDefinition;
}
export declare const registerResource: (resource: ResourceDefinition) => RegisterResourceAction;
export declare const UNREGISTER_RESOURCE = "UNREGISTER_RESOURCE";
export interface UnregisterResourceAction {
    readonly type: typeof UNREGISTER_RESOURCE;
    readonly payload: string;
}
export declare const unregisterResource: (resourceName: string) => UnregisterResourceAction;
