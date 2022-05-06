import type { AutocompleteProps } from '@mui/material/Autocomplete';
import { MixedFieldProps } from './MixedField';
import React from 'react';
import { SxProps } from '@mui/material/styles';
export declare type Optional<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & {
    [P in K]?: T[P];
};
export interface MixedAutocompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined, ChipComponent extends React.ElementType<any> = 'div'> extends Optional<Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'color' | 'onClick'>, 'renderInput'>, Pick<MixedFieldProps, 'children' | 'color' | 'label' | 'onClick' | 'variant'> {
    buttonSx?: SxProps;
    translations?: Record<string, string>;
}
declare function MixedAutocomplete<T extends string, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined, ChipComponent extends React.ElementType<any> = 'div'>({ buttonSx, children, color, label, onClick, translations, value: initialValue, variant, ...props }: MixedAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>): JSX.Element;
export default MixedAutocomplete;
