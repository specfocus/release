/// <reference types="react" />
import PropTypes from 'prop-types';
declare const LoadingPage: {
    ({ theme, ...props }: {
        [x: string]: any;
        theme: any;
    }): JSX.Element;
    propTypes: {
        theme: PropTypes.Requireable<object>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        loadingPrimary: PropTypes.Requireable<string>;
        loadingSecondary: PropTypes.Requireable<string>;
    };
    defaultProps: {
        theme: import("@mui/material/styles").Theme;
        loadingPrimary: string;
        loadingSecondary: string;
    };
};
export default LoadingPage;
