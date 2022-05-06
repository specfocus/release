/// <reference types="react" />
import PropTypes from 'prop-types';
declare const LoadingIndicator: {
    (props: LoadingIndicatorProps): JSX.Element;
    propTypes: {
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        width: PropTypes.Requireable<string>;
    };
};
interface LoadingIndicatorProps {
    className?: string;
}
export default LoadingIndicator;
