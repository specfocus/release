import { ReactNode, ComponentType, ReactElement } from 'react';
import { SortPayload, Record } from '../../types';
import { ReferenceInputValue } from './useReferenceInputController';
export interface ReferenceInputControllerProps {
    allowEmpty?: boolean;
    basePath: string;
    children: (params: ReferenceInputValue) => ReactNode;
    filter?: any;
    filterToQuery?: (filter: string) => any;
    input?: any;
    perPage?: number;
    record?: Record;
    reference: string;
    referenceSource?: (resource: string, source: string) => string;
    resource: string;
    sort?: SortPayload;
    source: string;
    onChange: () => void;
}
/**
 * Render prop version of the useReferenceInputController hook.
 *
 * @see useReferenceInputController
 */
export declare const ReferenceInputController: (props: ReferenceInputControllerProps) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
declare const _default: ComponentType<ReferenceInputControllerProps>;
export default _default;
