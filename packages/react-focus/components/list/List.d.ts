import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ListProps } from '../types';
/**
 * List page component
 *
 * The <List> component renders the list layout (title, buttons, filters, pagination),
 * and fetches the list of records from the REST API.
 * It then delegates the rendering of the list of records to its child component.
 * Usually, it's a <Datagrid>, responsible for displaying a table with one row for each post.
 *
 * In Redux terms, <List> is a connected component, and <Datagrid> is a dumb component.
 *
 * The <List> component accepts the following props:
 *
 * - actions
 * - aside
 * - bulkActionButtons
 * - component
 * - empty
 * - exporter
 * - filter (the permanent filter to apply to the query)
 * - filterDefaultValues (the default values for `alwaysOn` filters)
 * - filters (a list of inputs used to display the filter button/form combo)
 * - pagination
 * - perPage
 * - sort
 * - title
 * - syncWithLocation
 *
 * @example
 *
 * const postFilters = [
 *     <TextInput label="Search" source="q" alwaysOn />,
 *     <TextInput label="Title" source="title" />
 * ];
 * export const PostList = (props) => (
 *     <List {...props}
 *         title="List of posts"
 *         sort={{ field: 'published_at' }}
 *         filter={{ is_published: true }}
 *         filters={postFilters}
 *     >
 *         <Datagrid>
 *             <TextField source="id" />
 *             <TextField source="title" />
 *             <EditButton />
 *         </Datagrid>
 *     </List>
 * );
 */
declare const List: {
    (props: ListProps & {
        children: ReactElement;
    }): ReactElement;
    propTypes: {
        actions: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        bulkActionButtons: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        filter: PropTypes.Requireable<object>;
        filterDefaultValues: PropTypes.Requireable<object>;
        filters: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.ReactElementLike[]>;
        pagination: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        perPage: PropTypes.Validator<number>;
        sort: PropTypes.Requireable<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>;
        title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        authProvider: PropTypes.Requireable<(...args: any[]) => any>;
        hasCreate: PropTypes.Requireable<boolean>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasList: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        location: PropTypes.Requireable<any>;
        match: PropTypes.Requireable<any>;
        path: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        syncWithLocation: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        filter: {};
        perPage: number;
    };
};
export default List;
