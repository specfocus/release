/// <reference types="react" />
import PropTypes from 'prop-types';
import { PublicFieldProps, InjectedFieldProps } from './types';
export interface ImageFieldProps extends PublicFieldProps, InjectedFieldProps {
    src?: string;
    title?: string;
    classes?: object;
}
declare const ImageField: {
    (props: ImageFieldProps): JSX.Element;
    displayName: string;
    defaultProps: {
        addLabel: boolean;
    };
    propTypes: {
        src: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        addLabel: PropTypes.Requireable<boolean>;
        sortBy: PropTypes.Requireable<string>;
        sortByOrder: PropTypes.Requireable<"DESC" | "ASC">;
        source: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        sortable: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        cellClassName: PropTypes.Requireable<string>;
        headerClassName: PropTypes.Requireable<string>;
        textAlign: PropTypes.Requireable<"center" | "inherit" | "justify" | "left" | "right">;
        emptyText: PropTypes.Requireable<string>;
    };
};
export default ImageField;
