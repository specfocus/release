/// <reference types="react" />
import PropTypes from 'prop-types';
import { TextFieldProps } from '@mui/material';
import { InputProps } from '../../features/core';
export declare const ResettableTextFieldStyles: {
    [x: string]: {
        height: number;
        width: number;
        padding?: undefined;
        position?: undefined;
        right?: undefined;
        paddingRight?: undefined;
    } | {
        width: number;
        height?: undefined;
        padding?: undefined;
        position?: undefined;
        right?: undefined;
        paddingRight?: undefined;
    } | {
        height: number;
        width: number;
        padding: number;
        position?: undefined;
        right?: undefined;
        paddingRight?: undefined;
    } | {
        position: string;
        right: number;
        height?: undefined;
        width?: undefined;
        padding?: undefined;
        paddingRight?: undefined;
    } | {
        paddingRight: number;
        height?: undefined;
        width?: undefined;
        padding?: undefined;
        position?: undefined;
        right?: undefined;
    };
};
/**
 * An override of the default Material-UI TextField which is resettable
 */
declare const ResettableTextField: {
    (props: ResettableTextFieldProps): JSX.Element;
    propTypes: {
        clearAlwaysVisible: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        InputProps: PropTypes.Requireable<object>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
        onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        resettable: PropTypes.Requireable<boolean>;
        value: PropTypes.Validator<any>;
    };
};
export {};
interface Props {
    clearAlwaysVisible?: boolean;
    resettable?: boolean;
}
export declare type ResettableTextFieldProps = InputProps<Props & TextFieldProps>;
export default ResettableTextField;
