import { ReactElement } from 'react';
import { ListControllerProps } from '../useListController';
import { Record, SortPayload } from '../../types';
export interface ReferenceArrayFieldControllerProps {
    basePath?: string;
    filter?: any;
    page?: number;
    perPage?: number;
    record?: Record;
    reference: string;
    resource: string;
    sort?: SortPayload;
    source: string;
    children: (params: ListControllerProps) => ReactElement<any>;
}
/**
 * Render prop version of the useReferenceArrayFieldController hook.
 *
 * @see useReferenceArrayFieldController
 */
declare const ReferenceArrayFieldController: (props: ReferenceArrayFieldControllerProps) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export default ReferenceArrayFieldController;
