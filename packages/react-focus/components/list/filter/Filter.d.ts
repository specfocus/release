import PropTypes from 'prop-types';
import { ReactNode } from 'react';
export interface FilterProps {
    children: ReactNode;
    context?: 'form' | 'button';
    variant?: string;
}
/**
 * Filter button/form combo
 *
 * @example
 *
 * const PostFilter = (props) => (
 *     <Filter {...props}>
 *         <TextInput label="Search" source="q" alwaysOn />
 *         <TextInput label="Title" source="title" defaultValue="Hello, World!" />
 *     </Filter>
 * );
 *
 * export const PostList = (props) => (
 *     <List {...props} filters={<PostFilter />}>
 *         ...
 *     </List>
 * );
 *
 */
declare const Filter: {
    (props: FilterProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        classes: PropTypes.Requireable<object>;
        context: PropTypes.Requireable<string>;
    };
};
export default Filter;
