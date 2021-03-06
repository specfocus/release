/// <reference types="react" />
import PropTypes from 'prop-types';
import { InputProps } from '../../features/core';
import { TextFieldProps } from '@mui/material/TextField';
export declare type TextInputProps = InputProps<TextFieldProps> & Omit<TextFieldProps, 'label' | 'helperText'>;
/**
 * An Input component for a string
 *
 * @example
 * <TextInput source="first_name" />
 *
 * You can customize the `type` props (which defaults to "text").
 * Note that, due to a React bug, you should use `<NumberField>` instead of using type="number".
 * @example
 * <TextInput source="email" type="email" />
 * <NumberInput source="nb_views" />
 *
 * The object passed as `options` props is passed to the <ResettableTextField> component
 */
declare const TextInput: {
    (props: TextInputProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string | boolean>;
        options: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
    };
    defaultProps: {
        options: {};
    };
};
export default TextInput;
