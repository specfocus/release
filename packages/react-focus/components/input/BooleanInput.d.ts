/// <reference types="react" />
import PropTypes from 'prop-types';
import { FormGroupProps } from '@mui/material/FormGroup';
import { SwitchProps } from '@mui/material/Switch';
import { InputProps } from '../../features/core';
declare const BooleanInput: {
    (props: BooleanInputProps): JSX.Element;
    propTypes: {
        options: PropTypes.Requireable<PropTypes.InferProps<any>>;
        disabled: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string | boolean>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
    };
    defaultProps: {
        options: {};
    };
};
export declare type BooleanInputProps = InputProps<SwitchProps> & Omit<FormGroupProps, 'defaultValue' | 'onChange' | 'onBlur' | 'onFocus'>;
export default BooleanInput;
