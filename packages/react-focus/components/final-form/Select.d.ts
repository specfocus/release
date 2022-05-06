import { ReactNode } from 'react';
import { FormControlProps, FormHelperTextProps, InputLabelProps, MenuItemProps, SelectProps as MuiSelectProps } from '@mui/material';
import { ShowErrorFunc } from './ErrorMessage';
import { FieldProps } from 'react-final-form';
export interface SelectData {
    label: string;
    value: string | number | string[] | undefined;
    disabled?: boolean;
}
export interface SelectProps extends Partial<Omit<MuiSelectProps, 'onChange'>> {
    name: string;
    label?: ReactNode;
    required?: boolean;
    multiple?: boolean;
    helperText?: string;
    fieldProps?: Partial<FieldProps<any, any>>;
    formControlProps?: Partial<FormControlProps>;
    inputLabelProps?: Partial<InputLabelProps>;
    formHelperTextProps?: Partial<FormHelperTextProps>;
    showError?: ShowErrorFunc;
    menuItemProps?: Partial<MenuItemProps>;
    data?: SelectData[];
    children?: ReactNode;
}
export declare function Select(props: SelectProps): JSX.Element;
