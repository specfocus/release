/// <reference types="react" />
import { ResourceChildren, CustomRoutes, CatchAllComponent, TitleComponent, DashboardComponent } from '../types';
export interface RoutesWithLayoutProps {
    catchAll: CatchAllComponent;
    children: ResourceChildren;
    customRoutes?: CustomRoutes;
    dashboard?: DashboardComponent;
    title?: TitleComponent;
}
declare const RoutesWithLayout: (props: RoutesWithLayoutProps) => JSX.Element;
export default RoutesWithLayout;
