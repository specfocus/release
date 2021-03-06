/// <reference types="react" />
import PropTypes from 'prop-types';
import { FieldProps, FieldRenderProps } from 'react-final-form';
import { Validator } from './validate';
export declare const isRequired: (validate: any) => boolean;
interface Props extends Omit<FieldProps<any, FieldRenderProps<any, HTMLElement>, HTMLElement>, 'validate'> {
    defaultValue?: any;
    input?: any;
    source: string;
    validate?: Validator | Validator[];
}
declare const FormField: {
    (props: Props): JSX.Element;
    propTypes: {
        defaultValue: PropTypes.Requireable<any>;
        source: PropTypes.Requireable<string>;
        validate: PropTypes.Requireable<any[] | ((...args: any[]) => any)>;
    };
};
export default FormField;
