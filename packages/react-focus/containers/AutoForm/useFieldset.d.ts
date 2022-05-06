import { ClassNameMap } from '@mui/material/styles';
import { FormApi } from 'final-form';
import { Dispatch } from 'react';
import { DefaultNamespace, TFunction } from 'react-i18next';
import { BaseDomain } from '../../lib/BaseDomain';
import { BaseSchema } from '../../lib/BaseSchema';
import { ObjectSchema, SimpleObject, SimpleType } from '../../lib/ObjectSchema';
import { Schema } from '../../lib/Schema';
import { ActionPayload } from './fields/ActionField';
export interface FieldText {
    helperText?: string;
    label: string;
    placeholder?: string;
}
export interface FieldActionPayload {
    type: string;
    name: string;
}
export interface FieldProps<S extends BaseSchema = BaseSchema, D extends BaseDomain = BaseDomain> extends FieldText {
    api: FormApi;
    dependencies?: Record<string, SimpleType>;
    disabled?: true;
    dispatch: Dispatch<ActionPayload | FieldActionPayload>;
    domain?: D;
    className?: string;
    filter?: SimpleType;
    name: string;
    readonly?: true;
    required?: true;
    schema: S;
    t: TFunction<DefaultNamespace>;
    value?: SimpleType;
    values?: Record<string, SimpleType>;
    variant?: string;
}
export declare type Dependency = string | Record<string, boolean | number | number[] | string | string[]>;
export interface FieldsetContext {
    classes?: ClassNameMap<string>;
    columns?: number;
    dependencies: Record<string, Dependency>;
    dispatch: Dispatch<ActionPayload>;
    excludes?: ReadonlyArray<string>;
    i18n?: Record<string, string | FieldText>;
    immutables?: string[];
    includes?: ReadonlyArray<string>;
    layout?: Record<string, [number, [number, number?]]>;
    requires?: ReadonlyArray<string>;
    styles?: Record<string, string>;
    variants?: Record<string, string>;
    values: Record<string, SimpleType>;
}
export interface FieldsetProps {
    name?: string;
    context: FieldsetContext;
    schema: ObjectSchema<SimpleObject>;
}
declare const useFieldset: ({ context, name: fieldset, schema: { fields } }: FieldsetProps) => {
    api: FormApi<Record<string, any>, Partial<Record<string, any>>>;
    hidden: boolean;
    getFieldProps: <S extends Schema>(key: string, schema: S) => FieldProps<S, BaseDomain>;
    t: TFunction<"translation", undefined>;
};
export default useFieldset;
