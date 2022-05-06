import { ReactNode } from 'react';
import { FormControlLabelProps, FormControlProps, FormGroupProps, FormHelperTextProps, FormLabelProps, SwitchProps as MuiSwitchProps } from '@mui/material';
import { ShowErrorFunc } from './ErrorMessage';
import { FieldProps } from 'react-final-form';
export interface SwitchData {
    label: ReactNode;
    value: unknown;
    disabled?: boolean;
}
export interface SwitchesProps extends Partial<Omit<MuiSwitchProps, 'onChange'>> {
    name: string;
    data: SwitchData | SwitchData[];
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
export declare function Switches(props: SwitchesProps): JSX.Element;
