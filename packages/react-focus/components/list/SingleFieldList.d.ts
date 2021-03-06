import * as React from 'react';
import { HtmlHTMLAttributes, ComponentType } from 'react';
import PropTypes from 'prop-types';
import { Record, RecordMap, Identifier } from '../../features/core';
/**
 * Iterator component to be used to display a list of entities, using a single field
 *
 * @example Display all the books by the current author
 * <ReferenceManyField reference="books" target="author_id">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * By default, it includes a link to the <Edit> page of the related record
 * (`/books/:id` in the previous example).
 *
 * Set the linkType prop to "show" to link to the <Show> page instead.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType="show">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * You can also prevent `<SingleFieldList>` from adding link to children by setting
 * `linkType` to false.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType={false}>
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 */
declare const SingleFieldList: {
    (props: SingleFieldListProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        component: (props: any, propName: any, componentName: any) => Error;
        data: PropTypes.Requireable<any>;
        ids: PropTypes.Requireable<any[]>;
        linkType: PropTypes.Requireable<string | boolean>;
        resource: PropTypes.Requireable<string>;
    };
};
export interface SingleFieldListProps<RecordType extends Record = Record> extends HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
    component?: string | ComponentType<any>;
    linkType?: string | false;
    children: React.ReactElement;
    basePath?: string;
    data?: RecordMap<RecordType>;
    ids?: Identifier[];
    loaded?: boolean;
}
export default SingleFieldList;
