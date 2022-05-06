/// <reference types="react" />
import { BoxProps } from '@mui/material/Box';
import { FormApi, FormState } from 'final-form';
import { FormRenderProps } from 'react-final-form';
import { ObjectSchema, SimpleObject, SimpleType } from '../../lib/ObjectSchema';
import { AreaPresetKey } from '../AutoGrid/presets';
import { FieldsetContext } from './useFieldset';
declare type FormSchema = ObjectSchema<SimpleObject>;
export interface FormContext extends Omit<FieldsetContext, 'values'> {
    observer?: (values: Record<string, SimpleType>, api: FormApi) => void;
}
export interface AutoFormProps<FormValues = Record<string, any>, InitialFormValues = Partial<FormValues>> extends FormContext, Pick<FormRenderProps<FormValues, InitialFormValues>, 'form' | 'handleSubmit'>, Omit<BoxProps, 'hidden'> {
    config: AreaPresetKey;
    schema: FormSchema;
    state: FormState<FormValues, InitialFormValues>;
}
export default function AutoForm({ children, form, handleSubmit, observer, schema, state, ...other }: AutoFormProps): JSX.Element;
export {};
