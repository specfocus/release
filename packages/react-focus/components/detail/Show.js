"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const ShowView_1 = require("./ShowView");
/**
 * Page component for the Show view
 *
 * The `<Show>` component renders the page title and actions,
 * fetches the record from the data provider.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleShowLayout>`),
 * to which it passes the `record` as prop.
 *
 * The <Show> component accepts the following props:
 *
 * - actions
 * - aside
 * - component
 * - title
 *
 * @example
 *
 * // in src/posts.js
 * import * as React from "react";
 * import { Show, SimpleShowLayout, TextField } from '../../app';
 *
 * export const PostShow = (props) => (
 *     <Show {...props}>
 *         <SimpleShowLayout>
 *             <TextField source="title" />
 *         </SimpleShowLayout>
 *     </Show>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from '../../app';
 *
 * import { PostShow } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" show={PostShow} />
 *     </Admin>
 * );
 * export default App;
 */
const Show = (props) => {
    (0, core_1.useCheckMinimumRequiredProps)('Show', ['children'], props);
    const controllerProps = (0, core_1.useShowController)(props);
    const body = ((0, jsx_runtime_1.jsx)(core_1.ShowContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsx)(ShowView_1.ShowView, Object.assign({}, props, controllerProps), void 0) }), void 0));
    return props.resource ? (
    // support resource override via props
    (0, jsx_runtime_1.jsx)(core_1.ResourceContextProvider, Object.assign({ value: props.resource }, { children: body }), void 0)) : (body);
};
exports.Show = Show;
exports.Show.propTypes = {
    actions: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    aside: prop_types_1.default.element,
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    id: prop_types_1.default.any.isRequired,
    resource: prop_types_1.default.string,
    title: prop_types_1.default.node,
};
