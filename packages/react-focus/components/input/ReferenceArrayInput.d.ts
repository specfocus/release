import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { InputProps, SortPayload, PaginationPayload, Translate } from '../../features/core';
import { FieldInputProps, FieldMetaState } from 'react-final-form';
export interface ReferenceArrayInputProps extends InputProps {
    allowEmpty?: boolean;
    basePath?: string;
    children: ReactElement;
    classes?: any;
    className?: string;
    label?: string;
    reference: string;
    resource?: string;
    [key: string]: any;
}
/**
 * An Input component for fields containing a list of references to another resource.
 * Useful for 'hasMany' relationship.
 *
 * @example
 * The post object has many tags, so the post resource looks like:
 * {
 *    id: 1234,
 *    tag_ids: [ "1", "23", "4" ]
 * }
 *
 * ReferenceArrayInput component fetches the current resources (using
 * `dataProvider.getMany()`) as well as possible resources (using
 * `dataProvider.getList()`) in the reference endpoint. It then
 * delegates rendering to a subcomponent, to which it passes the possible
 * choices as the `choices` attribute.
 *
 * Use it with a selector component as child, like `<SelectArrayInput>`
 * or <CheckboxGroupInput>.
 *
 * @example
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceArrayInput source="tag_ids" reference="tags">
 *                 <SelectArrayInput optionText="name" />
 *             </ReferenceArrayInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      perPage={100}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      sort={{ field: 'name', order: 'ASC' }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filter={{ is_public: true }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * The enclosed component may filter results. ReferenceArrayInput passes a
 * `setFilter` function as prop to its child component. It uses the value to
 * create a filter for the query - by default { q: [searchText] }. You can
 * customize the mapping searchText => searchQuery by setting a custom
 * `filterToQuery` function prop:
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filterToQuery={searchText => ({ name: searchText })}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 */
declare const ReferenceArrayInput: {
    ({ children, id: idOverride, onBlur, onChange, onFocus, validate, parse, format, ...props }: ReferenceArrayInputProps): JSX.Element;
    propTypes: {
        allowEmpty: PropTypes.Requireable<boolean>;
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        filter: PropTypes.Requireable<object>;
        filterToQuery: PropTypes.Validator<(...args: any[]) => any>;
        label: PropTypes.Requireable<string>;
        perPage: PropTypes.Requireable<number>;
        reference: PropTypes.Validator<string>;
        resource: PropTypes.Requireable<string>;
        sort: PropTypes.Requireable<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>;
        source: PropTypes.Requireable<string>;
    };
    defaultProps: {
        filter: {};
        filterToQuery: (searchText: any) => {
            q: any;
        } | {
            q?: undefined;
        };
        perPage: number;
        sort: {
            field: string;
            order: string;
        };
    };
};
export interface ReferenceArrayInputViewProps {
    allowEmpty?: boolean;
    basePath?: string;
    children: ReactElement;
    choices: any[];
    classes?: object;
    className?: string;
    error?: string;
    helperText?: string | boolean;
    id: string;
    input: FieldInputProps<any, HTMLElement>;
    isRequired: boolean;
    label?: string;
    loaded: boolean;
    loading: boolean;
    meta: FieldMetaState<any>;
    onChange: any;
    options?: any;
    reference: string;
    resource?: string;
    setFilter: (v: string) => void;
    setPagination: (pagination: PaginationPayload) => void;
    setSort: (sort: SortPayload, order?: string) => void;
    source: string;
    translate: Translate;
    warning?: string;
}
export declare const ReferenceArrayInputView: {
    ({ allowEmpty, basePath, children, choices, className, error, input, loaded, loading, isRequired, label, meta, onChange, options, reference, resource, setFilter, setPagination, setSort, source, translate, warning, ...rest }: ReferenceArrayInputViewProps): JSX.Element;
    propTypes: {
        allowEmpty: PropTypes.Requireable<boolean>;
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        choices: PropTypes.Requireable<any[]>;
        className: PropTypes.Requireable<string>;
        error: PropTypes.Requireable<string>;
        loading: PropTypes.Requireable<boolean>;
        input: PropTypes.Validator<object>;
        label: PropTypes.Requireable<string>;
        meta: PropTypes.Requireable<object>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        options: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        setFilter: PropTypes.Requireable<(...args: any[]) => any>;
        setPagination: PropTypes.Requireable<(...args: any[]) => any>;
        setSort: PropTypes.Requireable<(...args: any[]) => any>;
        source: PropTypes.Requireable<string>;
        translate: PropTypes.Validator<(...args: any[]) => any>;
        warning: PropTypes.Requireable<string>;
    };
};
export default ReferenceArrayInput;
