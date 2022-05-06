import { FunctionComponent } from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import { InputProps } from '../../features/core';
/**
 * An Input component for a number
 *
 * @example
 * <NumberInput source="nb_views" />
 *
 * You can customize the `step` props (which defaults to "any")
 * @example
 * <NumberInput source="nb_views" step={1} />
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 */
declare const NumberInput: FunctionComponent<NumberInputProps>;
export interface NumberInputProps extends InputProps<TextFieldProps>, Omit<TextFieldProps, 'label' | 'helperText' | 'onChange' | 'onBlur' | 'onFocus' | 'defaultValue'> {
    step?: string | number;
    min?: string | number;
    max?: string | number;
}
export default NumberInput;
