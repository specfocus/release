import { ReactElement } from 'react';
import { Record, SortPayload } from '../../types';
import { ListControllerProps } from '../useListController';
export interface ReferenceManyFieldControllerProps {
    basePath: string;
    children: (params: ListControllerProps) => ReactElement<any>;
    filter?: any;
    page?: number;
    perPage?: number;
    record?: Record;
    reference: string;
    resource: string;
    sort?: SortPayload;
    source: string;
    target: string;
    total?: number;
}
/**
 * Render prop version of the useReferenceManyFieldController hook.
 *
 * @see useReferenceManyFieldController
 */
export declare const ReferenceManyFieldController: (props: ReferenceManyFieldControllerProps) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export default ReferenceManyFieldController;
