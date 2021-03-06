import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { DropzoneOptions } from 'react-dropzone';
import { InputProps } from '../../features/core';
export interface FileInputProps {
    accept?: string;
    children?: ReactNode;
    labelMultiple?: string;
    labelSingle?: string;
    maxSize?: number;
    minSize?: number;
    multiple?: boolean;
    placeholder?: ReactNode;
}
export interface FileInputOptions extends DropzoneOptions {
    inputProps?: any;
    onRemove?: Function;
}
declare const FileInput: {
    (props: FileInputProps & InputProps<FileInputOptions>): JSX.Element;
    propTypes: {
        accept: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        isRequired: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string>;
        labelMultiple: PropTypes.Requireable<string>;
        labelSingle: PropTypes.Requireable<string>;
        maxSize: PropTypes.Requireable<number>;
        minSize: PropTypes.Requireable<number>;
        multiple: PropTypes.Requireable<boolean>;
        options: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export default FileInput;
