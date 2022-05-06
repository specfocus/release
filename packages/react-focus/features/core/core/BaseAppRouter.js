"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const RoutesWithLayout_1 = __importDefault(require("./RoutesWithLayout"));
const auth_1 = require("../auth");
const util_1 = require("../util");
const useScrollToTop_1 = require("./useScrollToTop");
const BaseAppRouter = (props) => {
    const getPermissions = (0, auth_1.useGetPermissions)();
    const doLogout = (0, auth_1.useLogout)();
    const { authenticated } = (0, auth_1.useAuthState)();
    const oneSecondHasPassed = (0, util_1.useTimeout)(1000);
    const [computedChildren, setComputedChildren] = (0, util_1.useSafeSetState)([]);
    (0, useScrollToTop_1.useScrollToTop)();
    (0, react_1.useEffect)(() => {
        if (typeof props.children === 'function') {
            initializeResources();
        }
    }, [authenticated]); // eslint-disable-line react-hooks/exhaustive-deps
    const initializeResources = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const permissions = yield getPermissions();
            const resolveChildren = props.children;
            const childrenFuncResult = resolveChildren(permissions);
            if (childrenFuncResult.then) {
                childrenFuncResult.then(resolvedChildren => setComputedChildren(resolvedChildren
                    .filter(child => child)
                    .map(child => (Object.assign(Object.assign({}, child), { props: Object.assign(Object.assign({}, child.props), { key: child.props.name }) })))));
            }
            else {
                setComputedChildren(childrenFuncResult.filter(child => child));
            }
        }
        catch (error) {
            console.error(error);
            doLogout();
        }
    });
    const renderCustomRoutesWithoutLayout = (route, routeProps) => {
        if (route.props.render) {
            return route.props.render(Object.assign(Object.assign({}, routeProps), { title: props.title }));
        }
        if (route.props.component) {
            return (0, react_1.createElement)(route.props.component, Object.assign(Object.assign({}, routeProps), { title: props.title }));
        }
    };
    const { layout, catchAll, children, customRoutes, dashboard, loading: LoadingPage, logout, menu, ready: Ready, theme, title, } = props;
    if (typeof children !== 'function' && !children) {
        return (0, jsx_runtime_1.jsx)(Ready, {}, void 0);
    }
    if ((typeof children === 'function' &&
        (!computedChildren || computedChildren.length === 0)) ||
        (Array.isArray(children) && children.length === 0)) {
        return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [customRoutes
                    .filter(route => route.props.noLayout)
                    .map((route, key) => (0, react_1.cloneElement)(route, {
                    key,
                    render: routeProps => renderCustomRoutesWithoutLayout(route, routeProps),
                    component: undefined,
                })), oneSecondHasPassed && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { element: () => (0, jsx_runtime_1.jsx)(LoadingPage, { theme: theme }, void 0) }, "loading"))] }, void 0));
    }
    const childrenToRender = (typeof children === 'function'
        ? computedChildren
        : children);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [
            // Render every resource children outside the React Router Routes
            // as we need all of them and not just the one rendered
            react_1.Children.map(childrenToRender, (child) => (0, react_1.cloneElement)(child, {
                key: child.props.name,
                // The context prop instructs the Resource component to not render anything
                // but simply to register itself as a known resource
                intent: 'registration',
            })), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [customRoutes
                        .filter(route => route.props.noLayout)
                        .map((route, key) => (0, react_1.cloneElement)(route, {
                        key,
                        render: routeProps => renderCustomRoutesWithoutLayout(route, routeProps),
                        component: undefined,
                    })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: () => (0, react_1.createElement)(layout, {
                            dashboard,
                            logout,
                            menu,
                            theme,
                            title,
                        }, (0, jsx_runtime_1.jsx)(RoutesWithLayout_1.default, Object.assign({ catchAll: catchAll, customRoutes: customRoutes.filter(route => !route.props.noLayout), dashboard: dashboard, title: title }, { children: react_1.Children.map(childrenToRender, (child) => (0, react_1.cloneElement)(child, {
                                key: child.props.name,
                                intent: 'route',
                            })) }), void 0)) }, void 0)] }, void 0)] }, void 0));
};
BaseAppRouter.defaultProps = {
    customRoutes: [],
};
exports.default = BaseAppRouter;
