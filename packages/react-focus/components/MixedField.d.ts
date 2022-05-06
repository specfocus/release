import { SxProps } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import { TextFieldProps } from '@mui/material/TextField';
import React from 'react';
export declare type TElement = HTMLTextAreaElement | HTMLInputElement;
export declare type ChangeEvent = React.ChangeEvent<TElement>;
export declare type FormEvent = React.FormEvent<HTMLDivElement>;
export interface MixedFieldProps extends Omit<TextFieldProps, 'onChange' | 'onClick' | 'onInput'>, Partial<Pick<ButtonProps, 'children' | 'onClick'>> {
    buttonSx?: SxProps;
    onChange?: (event: ChangeEvent, value: string) => void;
    onInput?: (event: FormEvent, value: string) => void;
}
declare function MixedField({ buttonSx, children, color, onInput, onChange, onClick, value: initialValue, ...spread }: MixedFieldProps): JSX.Element;
export default MixedField;
