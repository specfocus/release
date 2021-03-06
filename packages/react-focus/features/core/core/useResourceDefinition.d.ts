import { ResourceDefinition } from '../types';
/**
 * Hook which returns the definition of the requested resource
 */
export declare const useResourceDefinition: (props: UseResourceDefinitionOptions) => ResourceDefinition;
export interface UseResourceDefinitionOptions {
    readonly resource?: string;
    readonly options?: any;
    readonly hasList?: boolean;
    readonly hasEdit?: boolean;
    readonly hasShow?: boolean;
    readonly hasCreate?: boolean;
    readonly icon?: any;
}
