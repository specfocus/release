/// <reference types="react" />
import { AppRouterProps } from '../features/core';
declare const AppRouter: {
    (props: AppRouterProps): JSX.Element;
    defaultProps: {
        loading: {
            ({ theme, ...props }: {
                [x: string]: any;
                theme: any;
            }): JSX.Element;
            propTypes: {
                theme: import("prop-types").Requireable<object>;
                classes: import("prop-types").Requireable<object>;
                className: import("prop-types").Requireable<string>;
                loadingPrimary: import("prop-types").Requireable<string>;
                loadingSecondary: import("prop-types").Requireable<string>;
            };
            defaultProps: {
                theme: import("@mui/material").Theme;
                loadingPrimary: string;
                loadingSecondary: string;
            };
        };
    };
};
export default AppRouter;
