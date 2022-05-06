"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const Title_1 = require("../layout/Title");
const ListView_1 = __importDefault(require("./ListView"));
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
const List = (props) => {
    (0, core_1.useCheckMinimumRequiredProps)('List', ['children'], props);
    const controllerProps = (0, core_1.useListController)(props);
    return ((0, jsx_runtime_1.jsx)(core_1.ListContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsx)(ListView_1.default, Object.assign({}, props, controllerProps), void 0) }), void 0));
};
List.propTypes = {
    // the props you can change
    // @ts-ignore-line
    actions: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    aside: prop_types_1.default.element,
    // @ts-ignore-line
    bulkActionButtons: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    filter: prop_types_1.default.object,
    filterDefaultValues: prop_types_1.default.object,
    filters: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.arrayOf(prop_types_1.default.element),
    ]),
    // @ts-ignore-line
    pagination: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    perPage: prop_types_1.default.number.isRequired,
    //@ts-ignore-line
    sort: prop_types_1.default.shape({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    title: Title_1.TitlePropType,
    // the props managed by ../../app
    authProvider: prop_types_1.default.func,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    location: prop_types_1.default.any,
    match: prop_types_1.default.any,
    path: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    syncWithLocation: prop_types_1.default.bool,
};
List.defaultProps = {
    filter: {},
    perPage: 10,
};
exports.default = List;
