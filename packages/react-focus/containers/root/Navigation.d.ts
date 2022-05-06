import React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
export declare const useRouter: (...args: any[]) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
interface NavigationProps extends BrowserRouterProps {
}
declare const Navigation: ({ children, ...router }: NavigationProps) => JSX.Element;
export default Navigation;
