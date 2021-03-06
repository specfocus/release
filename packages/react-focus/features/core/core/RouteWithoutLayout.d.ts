/// <reference types="react" />
/**
 * Custom route with no layout, to be used in the <Admin customRoutes> array.
 *
 * @example
 * // in src/customRoutes.js
 * import * as React from "react";
 * import { Route } from 'react-router-dom';
 * import { RouteWithoutLayout } from '../app';
 * import Foo from './Foo';
 * import Register from './Register';
 *
 * export default [
 *     <Route path="/foo" component={Foo} />,
 *     <RouteWithoutLayout path="/register" component={Register} />,
 * ];
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin } from '../app';
 *
 * import customRoutes from './customRoutes';
 *
 * const App = () => (
 *     <Admin customRoutes={customRoutes} dataProvider={simpleRestProvider('http://path.to.my.api')}>
 *         ...
 *     </Admin>
 * );
 *
 * export default App;
 */
export declare const RouteWithoutLayout: {
    ({ noLayout, ...props }: {
        [x: string]: any;
        noLayout: any;
    }): JSX.Element;
    defaultProps: {
        noLayout: boolean;
    };
};
