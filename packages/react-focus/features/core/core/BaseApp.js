"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BaseAppContext_1 = __importDefault(require("./BaseAppContext"));
const BaseAppUI_1 = __importDefault(require("./BaseAppUI"));
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
 *     CoreAdmin,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from '../../core';
 *
 * const App = () => (
 *     <Core dataProvider={myDataProvider}>
 *         <Resource name="posts" list={ListGuesser} />
 *     </Core>
 * );
 *
 * // dynamic list of resources based on permissions
 *
 * import {
 *     CoreAdmin,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from '../../core';
 *
 * const App = () => (
 *     <CoreAdmin dataProvider={myDataProvider}>
 *         {permissions => [
 *             <Resource name="posts" key="posts" list={ListGuesser} />,
 *         ]}
 *     </CoreAdmin>
 * );
 *
 * // If you have to build a dynamic list of resources using a side effect,
 * // you can't use <CoreAdmin>. But as it delegates to sub components,
 * // it's relatively straightforward to replace it:
 *
 * import * as React from 'react';
 * import { useEffect, useState } from 'react';
 * import {
 *     BaseAppContext,
 *     BaseAppUI,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from '../../core';
 *
 * const App = () => (
 *     <BaseAppContext dataProvider={myDataProvider}>
 *         <UI />
 *     </BaseAppContext>
 * );
 *
 * const UI = () => {
 *     const [resources, setResources] = useState([]);
 *     const dataProvider = useDataProvider();
 *     useEffect(() => {
 *         dataProvider.introspect().then(r => setResources(r));
 *     }, []);
 *
 *     return (
 *         <BaseAppUI>
 *             {resources.map(resource => (
 *                 <Resource name={resource.name} key={resource.key} list={ListGuesser} />
 *             ))}
 *         </BaseAppUI>
 *     );
 * };
 */
const BaseApp = (props) => {
    const { appLayout, authProvider, catchAll, children, customReducers, customRoutes = [], customSagas, dashboard, dataProvider, disableTelemetry, history, i18nProvider, initialState, layout, loading, loginPage, logoutButton, menu, // deprecated, use a custom layout instead
    theme, title = 'React Admin', } = props;
    return ((0, jsx_runtime_1.jsx)(BaseAppContext_1.default, Object.assign({ authProvider: authProvider, dataProvider: dataProvider, i18nProvider: i18nProvider }, { children: (0, jsx_runtime_1.jsx)(BaseAppUI_1.default, Object.assign({ layout: appLayout || layout, customRoutes: customRoutes, dashboard: dashboard, disableTelemetry: disableTelemetry, menu: menu, catchAll: catchAll, theme: theme, title: title, loading: loading, loginPage: loginPage, logout: authProvider ? logoutButton : undefined }, { children: children }), void 0) }), void 0));
};
exports.default = BaseApp;
