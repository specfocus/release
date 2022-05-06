"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AppContext_1 = __importDefault(require("./AppContext"));
const AppUI_1 = __importDefault(require("./AppUI"));
/**
 * Main admin component, entry point to the application.
 *
 * Initializes the various contexts (auth, data, i18n, redux, router)
 * and defines the main routes.
 *
 * Expects a list of resources as children, or a function returning a list of
 * resources based on the permissions.
 *
 * @example
 *
 * // static list of resources
 *
 * import {
 *     Admin,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from '../app';
 *
 * const App = () => (
 *     <Admin dataProvider={myDataProvider}>
 *         <Resource name="posts" list={ListGuesser} />
 *     </Admin>
 * );
 *
 * // dynamic list of resources based on permissions
 *
 * import {
 *     Admin,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from '../app';
 *
 * const App = () => (
 *     <Admin dataProvider={myDataProvider}>
 *         {permissions => [
 *             <Resource name="posts" key="posts" list={ListGuesser} />,
 *         ]}
 *     </Admin>
 * );
 *
 * // If you have to build a dynamic list of resources using a side effect,
 * // you can't use <Admin>. But as it delegates to sub components,
 * // it's relatively straightforward to replace it:
 *
 * import * as React from 'react';
import { useEffect, useState } from 'react';
 * import {
 *     AppContext,
 *     AppUI,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from '../app';
 *
 * const App = () => (
 *     <AppContext dataProvider={myDataProvider}>
 *         <Resources />
 *     </AppContext>
 * );
 *
 * const Resources = () => {
 *     const [resources, setResources] = useState([]);
 *     const dataProvider = useDataProvider();
 *     useEffect(() => {
 *         dataProvider.introspect().then(r => setResources(r));
 *     }, []);
 *
 *     return (
 *         <AppUI>
 *             {resources.map(resource => (
 *                 <Resource name={resource.name} key={resource.key} list={ListGuesser} />
 *             ))}
 *         </AppUI>
 *     );
 * };
 */
const Admin = (props) => {
    const { appLayout, authProvider, catchAll, children, customReducers, customRoutes = [], customSagas, dashboard, dataProvider, disableTelemetry, 
    // @ts-ignore
    navigate, i18nProvider, initialState, layout, loading, locale, loginPage, logoutButton, menu, // deprecated, use a custom layout instead
    ready, theme, title = 'React Admin', } = props;
    if (appLayout && process.env.NODE_ENV !== 'production') {
        console.warn('You are using deprecated prop "appLayout", it was replaced by "layout", see https://github.com/marmelab/../../app/issues/2918');
    }
    if (loginPage === true && process.env.NODE_ENV !== 'production') {
        console.warn('You passed true to the loginPage prop. You must either pass false to disable it or a component class to customize it');
    }
    if (locale && process.env.NODE_ENV !== 'production') {
        console.warn('You are using deprecated prop "locale". You must now pass the initial locale to your i18nProvider');
    }
    return ((0, jsx_runtime_1.jsx)(AppContext_1.default, Object.assign({ authProvider: authProvider, dataProvider: dataProvider, i18nProvider: i18nProvider, 
        // @ts-ignore
        navigate: navigate, customReducers: customReducers, customSagas: customSagas, initialState: initialState }, { children: (0, jsx_runtime_1.jsx)(AppUI_1.default, Object.assign({ layout: appLayout || layout, customRoutes: customRoutes, dashboard: dashboard, disableTelemetry: disableTelemetry, menu: menu, catchAll: catchAll, theme: theme, title: title, loading: loading, loginPage: loginPage, logout: authProvider ? logoutButton : undefined, ready: ready }, { children: children }), void 0) }), void 0));
};
exports.default = Admin;
