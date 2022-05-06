/// <reference types="react" />
import { FormApi } from 'final-form';
import { ActionSchema } from '../../../lib/ActionSchema';
import { SimpleObject, SimpleType } from '../../../lib/ObjectSchema';
import { FieldProps } from '../useFieldset';
export interface ActionPayload extends Record<string, any> {
    type: string;
    form: FormApi;
    values: SimpleObject;
}
export interface ActionFieldProps extends FieldProps<ActionSchema> {
    values: Record<string, SimpleType>;
}
declare const ActionField: ({ api, disabled, dispatch, label: label, schema, values }: ActionFieldProps) => JSX.Element;
export default ActionField;
