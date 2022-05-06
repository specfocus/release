/// <reference types="react" />
import PropTypes from 'prop-types';
import { TextFieldProps } from '@mui/material/TextField';
import { InputProps } from '../../features/core';
export declare type NullableBooleanInputProps = InputProps<TextFieldProps> & Omit<TextFieldProps, 'label' | 'helperText'> & {
    nullLabel?: string;
    falseLabel?: string;
    trueLabel?: string;
};
declare const NullableBooleanInput: {
    (props: NullableBooleanInputProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string | boolean>;
        options: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
        nullLabel: PropTypes.Requireable<string>;
        falseLabel: PropTypes.Requireable<string>;
        trueLabel: PropTypes.Requireable<string>;
    };
};
export default NullableBooleanInput;
