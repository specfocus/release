import { ToolbarProps as MuiToolbarProps } from '@mui/material';
import { MutationMode, Record, RedirectionSideEffect } from '../../features/core';
import { FC, ReactNode } from 'react';
import { FormRenderProps } from 'react-final-form';
/**
 * The Toolbar displayed at the bottom of forms.
 *
 * @example Always enable the <SaveButton />
 *
 * import * as React from 'react';
 * import {
 *     Create,
 *     DateInput,
 *     TextInput,
 *     SimpleForm,
 *     Toolbar,
 *     required,
 * } from '../../app';
 *
 * const now = new Date();
 * const defaultSort = { field: 'title', order: 'ASC' };
 *
 * const CommentCreate = props => (
 *     <Create {...props}>
 *         <SimpleForm redirect={false} toolbar={<Toolbar alwaysEnableSaveButton={true} />}>
 *             <TextInput
 *                 source="author.name"
 *                 fullWidth
 *             />
 *             <DateInput source="created_at" defaultValue={now} />
 *             <TextInput source="body" fullWidth={true} multiline={true} />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by the <SimpleForm>)
 * @prop {boolean} alwaysEnableSaveButton Force enabling the <SaveButton>. If it's not defined, the <SaveButton> will be enabled using the `pristine` and `validating` props (disabled if pristine or validating, enabled otherwise).
 * @prop {ReactElement[]} children Customize the buttons you want to display in the <Toolbar>.
 * @prop {string} width Apply to the mobile or desktop classes depending on its value. Pass `xs` to display the mobile version.
 *
 */
declare const Toolbar: FC<ToolbarProps>;
export interface ToolbarProps<RecordType extends Record = Record> extends Omit<MuiToolbarProps, 'classes'> {
    children?: ReactNode;
    alwaysEnableSaveButton?: boolean;
    className?: string;
    handleSubmitWithRedirect?: (redirect?: RedirectionSideEffect) => void;
    handleSubmit?: FormRenderProps['handleSubmit'];
    invalid?: boolean;
    mutationMode?: MutationMode;
    pristine?: boolean;
    saving?: boolean;
    submitOnEnter?: boolean;
    redirect?: RedirectionSideEffect;
    basePath?: string;
    record?: RecordType;
    resource?: string;
    /** @deprecated use mutationMode: undoable instead */
    undoable?: boolean;
    validating?: boolean;
}
export default Toolbar;
