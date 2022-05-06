import { ComponentType } from 'react';
import { AuthProvider, LegacyAuthProvider, I18nProvider, DataProvider, ResourceChildren, CustomRoutes, DashboardComponent, LegacyDataProvider } from '../types';
export declare type ChildrenFunction = () => ComponentType[];
export interface AppContextProps {
    authProvider?: AuthProvider | LegacyAuthProvider;
    children?: ResourceChildren;
    customRoutes?: CustomRoutes;
    dashboard?: DashboardComponent;
    dataProvider: DataProvider | LegacyDataProvider;
    i18nProvider?: I18nProvider;
    theme?: object;
}
declare const BaseAppContext: (props: AppContextProps) => JSX.Element;
export default BaseAppContext;
