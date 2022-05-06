import type { AutocompleteProps } from '@mui/material/Autocomplete';
import { MixedFieldProps } from '../../../components/MixedField';
import React from 'react';
declare type Optional<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & {
    [P in K]?: T[P];
};
export interface AmountFieldProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined, ChipComponent extends React.ElementType<any> = 'div'> extends Optional<Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>, 'color' | 'onClick'>, 'renderInput'>, Pick<MixedFieldProps, 'children' | 'color' | 'label' | 'onClick' | 'variant'> {
    translations?: Record<string, string>;
}
declare function AmountField<T extends string, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined, ChipComponent extends React.ElementType<any> = 'div'>({ children, color, label, onClick, translations, value: initialValue, variant, ...props }: AmountFieldProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>): JSX.Element;
export default AmountField;
