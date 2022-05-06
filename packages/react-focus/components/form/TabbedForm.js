"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTabsWithErrors = exports.TabbedForm = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const get_1 = __importDefault(require("lodash/get"));
const TabbedFormView_1 = require("./TabbedFormView");
/**
 * Form layout where inputs are divided by tab, one input per line.
 *
 * Pass FormTab components as children.
 *
 * @example
 *
 * import * as React from "react";
 * import {
 *     Edit,
 *     TabbedForm,
 *     FormTab,
 *     Datagrid,
 *     TextField,
 *     DateField,
 *     TextInput,
 *     ReferenceManyField,
 *     NumberInput,
 *     DateInput,
 *     BooleanInput,
 *     EditButton
 * } from '../../app';
 *
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <TabbedForm>
 *             <FormTab label="summary">
 *                 <TextInput disabled label="Id" source="id" />
 *                 <TextInput source="title" validate={required()} />
 *                 <TextInput multiline source="teaser" validate={required()} />
 *             </FormTab>
 *             <FormTab label="body">
 *                 <RichTextInput source="body" validate={required()} addLabel={false} />
 *             </FormTab>
 *             <FormTab label="Miscellaneous">
 *                 <TextInput label="Password (if protected post)" source="password" type="password" />
 *                 <DateInput label="Publication date" source="published_at" />
 *                 <NumberInput source="average_note" validate={[ number(), minValue(0) ]} />
 *                 <BooleanInput label="Allow comments?" source="commentable" defaultValue />
 *                 <TextInput disabled label="Nb views" source="views" />
 *             </FormTab>
 *             <FormTab label="comments">
 *                 <ReferenceManyField reference="comments" target="post_id" addLabel={false}>
 *                     <Datagrid>
 *                         <TextField source="body" />
 *                         <DateField source="created_at" />
 *                         <EditButton />
 *                     </Datagrid>
 *                 </ReferenceManyField>
 *             </FormTab>
 *         </TabbedForm>
 *     </Edit>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @prop {ReactElement[]} FormTab elements
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
const TabbedForm = (props) => ((0, jsx_runtime_1.jsx)(core_1.FormWithRedirect, Object.assign({}, props, { render: formProps => (0, jsx_runtime_1.jsx)(TabbedFormView_1.TabbedFormView, Object.assign({}, formProps), void 0) }), void 0));
exports.TabbedForm = TabbedForm;
exports.TabbedForm.propTypes = {
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
    undoable: prop_types_1.default.bool,
    validate: prop_types_1.default.func,
    sanitizeEmptyValues: prop_types_1.default.bool,
};
const findTabsWithErrors = (children, errors) => {
    console.warn('Deprecated. FormTab now wrap their content inside a FormGroupContextProvider. If you implemented custom forms with tabs, please use the FormGroupContextProvider. See https://marmelab.com/../../app/CreateEdit.html#grouping-inputs');
    return react_1.Children.toArray(children).reduce((acc, child) => {
        if (!(0, react_1.isValidElement)(child)) {
            return acc;
        }
        const inputs = react_1.Children.toArray(child.props.children);
        if (inputs.some(input => (0, react_1.isValidElement)(input) && (0, get_1.default)(errors, input.props.source))) {
            return [...acc, child.props.label];
        }
        return acc;
    }, []);
};
exports.findTabsWithErrors = findTabsWithErrors;
