/// <reference types="react" />
import PropTypes from 'prop-types';
declare const Loading: {
    (props: any): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        loadingPrimary: PropTypes.Requireable<string>;
        loadingSecondary: PropTypes.Requireable<string>;
    };
    defaultProps: {
        loadingPrimary: string;
        loadingSecondary: string;
    };
};
export default Loading;
