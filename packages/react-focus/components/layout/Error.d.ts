import { HtmlHTMLAttributes, ErrorInfo } from 'react';
import PropTypes from 'prop-types';
declare const Error: {
    (props: ErrorProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        error: PropTypes.Validator<object>;
        errorInfo: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    };
};
export interface ErrorProps extends HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
    error: Error;
    errorInfo?: ErrorInfo;
    title?: string;
}
export default Error;
