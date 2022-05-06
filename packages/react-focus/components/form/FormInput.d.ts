import { HtmlHTMLAttributes, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Record } from '../../features/core';
declare const FormInput: {
    <RecordType extends Record | Omit<Record, "id"> = Record>(props: FormInputProps<RecordType>): JSX.Element;
    propTypes: {
        classes: PropTypes.Requireable<object>;
        input: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    displayName: string;
};
export interface FormInputProps<RecordType extends Record | Omit<Record, 'id'> = Record> extends HtmlHTMLAttributes<HTMLDivElement> {
    basePath: string;
    input: ReactElement<{
        label?: string;
        source?: string;
        id?: string;
        [key: string]: unknown;
    }>;
    margin?: 'none' | 'normal' | 'dense';
    record?: RecordType;
    resource?: string;
    variant?: 'standard' | 'outlined' | 'filled';
}
export default FormInput;
