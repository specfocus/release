/// <reference types="react" />
import PropTypes from 'prop-types';
import { TextFieldProps } from '@mui/material/TextField';
import { InputProps } from '../../features/core';
/**
 * Input component for entering a date and a time with timezone, using the browser locale
 */
declare const DateTimeInput: {
    ({ defaultValue, format, initialValue, label, helperText, margin, onBlur, onChange, onFocus, options, source, resource, parse, validate, variant, ...rest }: DateTimeInputProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string | boolean>;
        options: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
    };
    defaultProps: {
        options: {};
    };
};
export declare type DateTimeInputProps = InputProps<TextFieldProps> & Omit<TextFieldProps, 'helperText' | 'label'>;
export default DateTimeInput;
