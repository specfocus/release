/// <reference types="react" />
import { TextFieldProps } from '@mui/material/TextField';
import { InputProps } from '../../features/core';
declare const SearchInput: (props: SearchInputProps) => JSX.Element;
export declare type SearchInputProps = InputProps<TextFieldProps> & Omit<TextFieldProps, 'label' | 'helperText'>;
export default SearchInput;
