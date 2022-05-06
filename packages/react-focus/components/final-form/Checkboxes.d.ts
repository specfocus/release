import { FormControlLabelProps, FormControlProps, FormGroupProps, FormHelperTextProps, FormLabelProps, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { ReactNode } from 'react';
import { ShowErrorFunc } from './ErrorMessage';
import { FieldProps } from 'react-final-form';
export interface CheckboxData {
    label: ReactNode;
    value: unknown;
    disabled?: boolean;
    indeterminate?: boolean;
}
export interface CheckboxesProps extends Partial<Omit<MuiCheckboxProps, 'onChange'>> {
    name: string;
    data: CheckboxData | CheckboxData[];
    label?: ReactNode;
    required?: boolean;
    helperText?: string;
    fieldProps?: Partial<FieldProps<any, any>>;
    formControlProps?: Partial<FormControlProps>;
    formGroupProps?: Partial<FormGroupProps>;
    formLabelProps?: Partial<FormLabelProps>;
    formControlLabelProps?: Partial<FormControlLabelProps>;
    formHelperTextProps?: Partial<FormHelperTextProps>;
    showError?: ShowErrorFunc;
}
export declare function Checkboxes(props: CheckboxesProps): JSX.Element;
