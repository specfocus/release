"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const WithPermissions_1 = __importDefault(require("../auth/WithPermissions"));
const actions_1 = require("../actions");
const ResourceContextProvider_1 = require("./ResourceContextProvider");
const defaultOptions = {};
const ResourceRegister = (props) => {
    const { name, list, create, edit, show, icon, options = defaultOptions, } = props;
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, actions_1.registerResource)({
            name,
            options,
            hasList: !!list,
            hasEdit: !!edit,
            hasShow: !!show,
            hasCreate: !!create,
            icon,
        }));
        return () => {
            console.log('UNREGISTER_RESOURCE', name);
            dispatch((0, actions_1.unregisterResource)(name));
        };
    }, [dispatch, name, create, edit, icon, list, show, options]);
    return null;
};
const ResourceRoutes = (props) => {
    const { name, match, list, create, edit, show, options = defaultOptions, } = props;
    const isRegistered = (0, react_redux_1.useSelector)((state) => {
        return !!state.admin.resources[name];
    });
    const basePath = match || '';
    const resourceData = (0, react_1.useMemo)(() => ({
        resource: name,
        options,
        hasList: !!list,
        hasEdit: !!edit,
        hasShow: !!show,
        hasCreate: !!create,
    }), [name, options, create, edit, list, show]);
    // match tends to change even on the same route ; using memo to avoid an extra render
    return (0, react_1.useMemo)(() => {
        // if the registration hasn't finished, no need to render
        if (!isRegistered) {
            console.log(`if ${name} registration hasn't finished, no need to render`);
            return null;
        }
        const Create = (routeProps) => ((0, jsx_runtime_1.jsx)(WithPermissions_1.default, Object.assign({ component: create, basePath: basePath }, routeProps, resourceData), void 0));
        const Detail = (routeProps) => {
            const params = (0, react_router_dom_1.useParams)();
            return ((0, jsx_runtime_1.jsx)(WithPermissions_1.default, Object.assign({ component: edit, basePath: basePath, id: decodeURIComponent(params.id) }, routeProps, resourceData), void 0));
        };
        const Show = (routeProps) => {
            const params = (0, react_router_dom_1.useParams)();
            return ((0, jsx_runtime_1.jsx)(WithPermissions_1.default, Object.assign({ component: show, basePath: basePath, id: decodeURIComponent(params.id) }, routeProps, resourceData), void 0));
        };
        const List = (routeProps) => ((0, jsx_runtime_1.jsx)(WithPermissions_1.default, Object.assign({ component: list, basePath: basePath }, routeProps, resourceData, { syncWithLocation: true }), void 0));
        return ((0, jsx_runtime_1.jsx)(ResourceContextProvider_1.ResourceContextProvider, Object.assign({ value: name }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [create && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "create", element: (0, jsx_runtime_1.jsx)(Create, {}, void 0) }, void 0)), show && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ":id/show", element: (0, jsx_runtime_1.jsx)(Show, {}, void 0) }, void 0)), edit && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: ":id", element: (0, jsx_runtime_1.jsx)(Detail, {}, void 0) }, void 0)), list && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "", element: (0, jsx_runtime_1.jsx)(List, {}, void 0) }, void 0))] }, void 0) }), void 0));
    }, [basePath, name, create, edit, list, show, options, isRegistered]); // eslint-disable-line react-hooks/exhaustive-deps
};
const Resource = (props) => {
    const { intent = 'route' } = props, rest = __rest(props, ["intent"]);
    return intent === 'registration' ? ((0, jsx_runtime_1.jsx)(ResourceRegister, Object.assign({}, rest), void 0)) : ((0, jsx_runtime_1.jsx)(ResourceRoutes, Object.assign({}, rest), void 0));
};
exports.default = Resource;
