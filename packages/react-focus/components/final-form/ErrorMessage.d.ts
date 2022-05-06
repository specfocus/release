/// <reference types="react" />
import { FieldMetaState } from 'react-final-form';
import { FormHelperTextProps } from '@mui/material';
export interface ErrorMessageProps {
    showError: boolean;
    meta: FieldMetaState<any>;
    formHelperTextProps?: Partial<FormHelperTextProps>;
    helperText?: string;
}
export declare function ErrorMessage({ showError, meta, formHelperTextProps, helperText }: ErrorMessageProps): JSX.Element;
export declare type ShowErrorFunc = (props: ShowErrorProps) => boolean;
export interface ShowErrorProps {
    meta: FieldMetaState<any>;
}
export declare const useFieldForErrors: (name: string) => import("react-final-form").FieldRenderProps<any, HTMLElement, any>;
export declare const showErrorOnChange: ShowErrorFunc;
export declare const showErrorOnBlur: ShowErrorFunc;
