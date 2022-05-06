"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const CreateView_1 = require("./CreateView");
/**
 * Page component for the Create view
 *
 * The `<Create>` component renders the page title and actions.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleForm>`),
 * to which it passes the `record` as prop.
 *
 * The <Create> component accepts the following props:
 *
 * - actions
 * - aside
 * - component
 * - successMessage
 * - title
 *
 * @example
 *
 * // in src/posts.js
 * import * as React from "react";
 * import { Create, SimpleForm, TextInput } from '../../app';
 *
 * export const PostCreate = (props) => (
 *     <Create {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from '../../app';
 *
 * import { PostCreate } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" create={PostCreate} />
 *     </Admin>
 * );
 * export default App;
 */
const Create = (props) => {
    (0, core_1.useCheckMinimumRequiredProps)('Create', ['children'], props);
    const controllerProps = (0, core_1.useCreateController)(props);
    const body = ((0, jsx_runtime_1.jsx)(core_1.CreateContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsx)(CreateView_1.CreateView, Object.assign({}, props, controllerProps), void 0) }), void 0));
    return props.resource ? (
    // support resource override via props
    (0, jsx_runtime_1.jsx)(core_1.ResourceContextProvider, Object.assign({ value: props.resource }, { children: body }), void 0)) : (body);
};
exports.Create = Create;
exports.Create.propTypes = {
    actions: prop_types_1.default.element,
    aside: prop_types_1.default.element,
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    title: prop_types_1.default.node,
    record: prop_types_1.default.object,
    hasList: prop_types_1.default.bool,
    successMessage: prop_types_1.default.string,
    onSuccess: prop_types_1.default.func,
    onFailure: prop_types_1.default.func,
    transform: prop_types_1.default.func,
};
exports.default = exports.Create;
