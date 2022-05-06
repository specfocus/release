import { ReactNode } from 'react';
import { FormControlLabelProps, FormControlProps, FormHelperTextProps, FormLabelProps, RadioProps as MuiRadioProps, RadioGroupProps } from '@mui/material';
import { ShowErrorFunc } from './ErrorMessage';
import { FieldProps } from 'react-final-form';
export interface RadioData {
    label: ReactNode;
    value: unknown;
    disabled?: boolean;
}
export interface RadiosProps extends Partial<Omit<MuiRadioProps, 'onChange'>> {
    name: string;
    data: RadioData[];
    label?: ReactNode;
    required?: boolean;
    helperText?: string;
    formLabelProps?: Partial<FormLabelProps>;
    formControlLabelProps?: Partial<FormControlLabelProps>;
    fieldProps?: Partial<FieldProps<any, any>>;
    formControlProps?: Partial<FormControlProps>;
    radioGroupProps?: Partial<RadioGroupProps>;
    formHelperTextProps?: Partial<FormHelperTextProps>;
    showError?: ShowErrorFunc;
}
export declare function Radios(props: RadiosProps): JSX.Element;
