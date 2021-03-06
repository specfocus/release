import { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ListProps } from '@mui/material';
import { Record, RecordMap, Identifier } from '../../features/core';
/**
 * The <SimpleList> component renders a list of records as a material-ui <List>.
 * It is usually used as a child of ../../app's <List> and <ReferenceManyField> components.
 *
 * Also widely used on Mobile.
 *
 * Props:
 * - primaryText: function returning a React element (or some text) based on the record
 * - secondaryText: same
 * - tertiaryText: same
 * - leftAvatar: function returning a React element based on the record
 * - leftIcon: same
 * - rightAvatar: same
 * - rightIcon: same
 * - linkType: 'edit' or 'show', or a function returning 'edit' or 'show' based on the record
 * - rowStyle: function returning a style object based on (record, index)
 *
 * @example // Display all posts as a List
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = (props) => (
 *     <List {...props}>
 *         <SimpleList
 *             primaryText={record => record.title}
 *             secondaryText={record => `${record.views} views`}
 *             tertiaryText={record =>
 *                 new Date(record.published_at).toLocaleDateString()
 *             }
 *             rowStyle={postRowStyle}
 *          />
 *     </List>
 * );
 */
declare const SimpleList: {
    <RecordType extends Record = Record>(props: SimpleListProps<RecordType>): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        leftAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        leftIcon: PropTypes.Requireable<(...args: any[]) => any>;
        linkType: PropTypes.Requireable<string | boolean | ((...args: any[]) => any)>;
        primaryText: PropTypes.Requireable<((...args: any[]) => any) | PropTypes.ReactElementLike>;
        rightAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        rightIcon: PropTypes.Requireable<(...args: any[]) => any>;
        secondaryText: PropTypes.Requireable<((...args: any[]) => any) | PropTypes.ReactElementLike>;
        tertiaryText: PropTypes.Requireable<((...args: any[]) => any) | PropTypes.ReactElementLike>;
        rowStyle: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export declare type FunctionToElement<RecordType extends Record = Record> = (record: RecordType, id: Identifier) => ReactNode;
export interface SimpleListProps<RecordType extends Record = Record> extends Omit<ListProps, 'classes'> {
    className?: string;
    hasBulkActions?: boolean;
    leftAvatar?: FunctionToElement<RecordType>;
    leftIcon?: FunctionToElement<RecordType>;
    primaryText?: FunctionToElement<RecordType> | ReactElement;
    linkType?: string | FunctionLinkType | boolean;
    rightAvatar?: FunctionToElement<RecordType>;
    rightIcon?: FunctionToElement<RecordType>;
    secondaryText?: FunctionToElement<RecordType> | ReactElement;
    tertiaryText?: FunctionToElement<RecordType> | ReactElement;
    rowStyle?: (record: Record, index: number) => any;
    basePath?: string;
    data?: RecordMap<RecordType>;
    ids?: Identifier[];
    loaded?: boolean;
    total?: number;
}
export declare type FunctionLinkType = (record: Record, id: Identifier) => string;
export interface LinkOrNotProps {
    linkType?: string | FunctionLinkType | boolean;
    basePath: string;
    id: Identifier;
    record: Record;
    children: ReactNode;
}
export default SimpleList;
