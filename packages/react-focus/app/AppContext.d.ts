/// <reference types="react" />
import { AppContextProps } from '../features/core';
declare const AppContext: {
    (props: AppContextProps): JSX.Element;
    defaultProps: {
        i18nProvider: import("../features/core").I18nProvider;
    };
    displayName: string;
};
export default AppContext;
