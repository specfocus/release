import { ComponentType } from 'react';
import { ResourceChildren, CustomRoutes, CatchAllComponent, LayoutComponent, LoadingComponent, CoreLayoutProps } from '../types';
export interface AppRouterProps extends CoreLayoutProps {
    layout: LayoutComponent;
    catchAll: CatchAllComponent;
    children?: ResourceChildren;
    customRoutes?: CustomRoutes;
    loading: LoadingComponent;
    ready?: ComponentType;
}
declare const BaseAppRouter: {
    (props: AppRouterProps): JSX.Element;
    defaultProps: {
        customRoutes: any[];
    };
};
export default BaseAppRouter;
