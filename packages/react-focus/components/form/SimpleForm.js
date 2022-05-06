"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const SimpleFormView_1 = require("./SimpleFormView");
/**
 * Form with a one column layout, one input per line.
 *
 * Pass input components as children.
 *
 * @example
 *
 * import * as React from "react";
 * import { Create, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from '../../app';
 * import RichTextInput from 'ra-input-rich-text';
 *
 * export const PostCreate = (props) => (
 *     <Create {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *             <TextInput source="teaser" options={{ multiline: true }} />
 *             <RichTextInput source="body" />
 *             <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @prop {ReactElement[]} children Input elements
 * @prop {Object} initialValues
 * @prop {Function} validate
 * @prop {boolean} submitOnEnter
 * @prop {string} redirect
 * @prop {ReactElement} toolbar The element displayed at the bottom of the form, containing the SaveButton
 * @prop {string} variant Apply variant to all inputs. Possible values are 'standard', 'outlined', and 'filled' (default)
 * @prop {string} margin Apply variant to all inputs. Possible values are 'none', 'normal', and 'dense' (default)
 * @prop {boolean} sanitizeEmptyValues Whether or not deleted record attributes should be recreated with a `null` value (default: true)
 *
 * @param {Props} props
 */
const SimpleForm = (props) => ((0, jsx_runtime_1.jsx)(core_1.FormWithRedirect, Object.assign({}, props, { render: formProps => (0, jsx_runtime_1.jsx)(SimpleFormView_1.SimpleFormView, Object.assign({}, formProps), void 0) }), void 0));
SimpleForm.propTypes = {
    children: prop_types_1.default.node,
    initialValues: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]),
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    // @ts-ignore
    record: prop_types_1.default.object,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    save: prop_types_1.default.func,
    saving: prop_types_1.default.bool,
    submitOnEnter: prop_types_1.default.bool,
    toolbar: prop_types_1.default.element,
    undoable: prop_types_1.default.bool,
    validate: prop_types_1.default.func,
    version: prop_types_1.default.number,
    sanitizeEmptyValues: prop_types_1.default.bool,
};
exports.default = SimpleForm;
