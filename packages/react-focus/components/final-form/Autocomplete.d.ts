import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';
import { FieldProps } from 'react-final-form';
import { UseAutocompleteProps as MuiUseAutocompleteProps } from '@mui/material';
import { ShowErrorFunc } from './ErrorMessage';
import { ReactNode } from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
export declare type AutocompleteData = {
    [key: string]: any | null;
};
export interface AutocompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined> extends Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & MuiUseAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
    name: string;
    label: ReactNode;
    helperText?: string;
    required?: boolean;
    getOptionValue?: (option: T) => any;
    options: T[];
    fieldProps?: Partial<FieldProps<any, any>>;
    textFieldProps?: Partial<MuiTextFieldProps>;
    showError?: ShowErrorFunc;
}
export declare function Autocomplete<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>): JSX.Element;
