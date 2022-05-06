"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edit = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const EditView_1 = require("./EditView");
/**
 * Page component for the Edit view
 *
 * The `<Edit>` component renders the page title and actions,
 * fetches the record from the data provider.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleForm>`),
 * to which it passes the `record` as prop.
 *
 * The <Edit> component accepts the following props:
 *
 * - actions
 * - aside
 * - component
 * - successMessage
 * - title
 * - mutationMode
 * - undoable (deprecated)
 *
 * @example
 *
 * // in src/posts.js
 * import * as React from "react";
 * import { Edit, SimpleForm, TextInput } from '../../app';
 *
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from '../../app';
 *
 * import { PostEdit } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" edit={PostEdit} />
 *     </Admin>
 * );
 * export default App;
 */
const Edit = (props) => {
    (0, core_1.useCheckMinimumRequiredProps)('Edit', ['children'], props);
    const controllerProps = (0, core_1.useEditController)(props);
    const body = ((0, jsx_runtime_1.jsx)(core_1.EditContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsx)(EditView_1.EditView, Object.assign({}, props, controllerProps), void 0) }), void 0));
    return props.resource ? (
    // support resource override via props
    (0, jsx_runtime_1.jsx)(core_1.ResourceContextProvider, Object.assign({ value: props.resource }, { children: body }), void 0)) : (body);
};
exports.Edit = Edit;
exports.Edit.propTypes = {
    actions: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    aside: prop_types_1.default.element,
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    id: prop_types_1.default.any.isRequired,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    onSuccess: prop_types_1.default.func,
    onFailure: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    successMessage: prop_types_1.default.string,
    title: prop_types_1.default.node,
    transform: prop_types_1.default.func,
    undoable: prop_types_1.default.bool,
};
