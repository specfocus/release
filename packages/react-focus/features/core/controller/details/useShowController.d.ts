import { Record, Identifier } from '../../types';
import { Refetch } from '../../dataProvider';
export interface ShowProps {
    basePath?: string;
    hasCreate?: boolean;
    hasEdit?: boolean;
    hasShow?: boolean;
    hasList?: boolean;
    id?: Identifier;
    resource?: string;
    [key: string]: any;
}
export interface ShowControllerProps<RecordType extends Record = Record> {
    basePath?: string;
    defaultTitle: string;
    data?: RecordType;
    loading: boolean;
    loaded: boolean;
    hasCreate?: boolean;
    hasEdit?: boolean;
    hasList?: boolean;
    hasShow?: boolean;
    resource: string;
    record?: RecordType;
    refetch: Refetch;
    version: number;
}
/**
 * Prepare data for the Show view
 *
 * @param {Object} props The props passed to the Show component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Show view
 *
 * @example
 *
 * import { useShowController } from '../app';
 * import ShowView from './ShowView';
 *
 * const MyShow = props => {
 *     const controllerProps = useShowController(props);
 *     return <ShowView {...controllerProps} {...props} />;
 * }
 */
export declare const useShowController: <RecordType extends Record = Record>(props: ShowProps) => ShowControllerProps<RecordType>;
