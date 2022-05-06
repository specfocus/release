import { ComponentType } from 'react';
import { TitleComponent, LoginComponent, LayoutComponent, ResourceChildren, CatchAllComponent, CustomRoutes, DashboardComponent, LoadingComponent } from '../types';
export declare type ChildrenFunction = () => ComponentType[];
export interface AppUIProps {
    catchAll?: CatchAllComponent;
    children?: ResourceChildren;
    customRoutes?: CustomRoutes;
    dashboard?: DashboardComponent;
    disableTelemetry?: boolean;
    layout?: LayoutComponent;
    loading?: LoadingComponent;
    loginPage?: LoginComponent | boolean;
    logout?: ComponentType;
    menu?: ComponentType;
    ready?: ComponentType;
    theme?: object;
    title?: TitleComponent;
}
export declare type BaseAppUIProps = AppUIProps;
declare const BaseAppUI: (props: AppUIProps) => JSX.Element;
export default BaseAppUI;
