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
const prop_types_1 = __importDefault(require("prop-types"));
const GetApp_1 = __importDefault(require("@mui/icons-material/GetApp"));
const core_1 = require("../../features/core");
const Button_1 = __importDefault(require("./Button"));
const ExportButton = (props) => {
    const { maxResults = 1000, onClick, label = 'ra.action.export', icon = defaultIcon, exporter: customExporter, sort } = props, // deprecated, to be removed in v4
    rest = __rest(props, ["maxResults", "onClick", "label", "icon", "exporter", "sort"]);
    const { filter, filterValues, currentSort, exporter: exporterFromContext, total, } = (0, core_1.useListContext)(props);
    const resource = (0, core_1.useResourceContext)(props);
    const exporter = customExporter || exporterFromContext;
    const dataProvider = (0, core_1.useDataProvider)();
    const notify = (0, core_1.useNotify)();
    const handleClick = (0, react_1.useCallback)(event => {
        dataProvider
            .getList(resource, {
            sort: currentSort || sort,
            filter: filter
                ? Object.assign(Object.assign({}, filterValues), filter) : filterValues,
            pagination: { page: 1, perPage: maxResults },
        })
            .then(({ data }) => exporter &&
            exporter(data, (0, core_1.fetchRelatedRecords)(dataProvider), dataProvider, resource))
            .catch(error => {
            console.error(error);
            notify('ra.notification.http_error', 'warning');
        });
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [
        currentSort,
        dataProvider,
        exporter,
        filter,
        filterValues,
        maxResults,
        notify,
        onClick,
        resource,
        sort,
    ]);
    return ((0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ onClick: handleClick, label: label, disabled: total === 0 }, sanitizeRestProps(rest), { children: icon }), void 0));
};
const defaultIcon = (0, jsx_runtime_1.jsx)(GetApp_1.default, {}, void 0);
const sanitizeRestProps = (_a) => {
    var { basePath, filterValues, resource } = _a, rest = __rest(_a, ["basePath", "filterValues", "resource"]);
    return rest;
};
ExportButton.propTypes = {
    basePath: prop_types_1.default.string,
    exporter: prop_types_1.default.func,
    filterValues: prop_types_1.default.object,
    label: prop_types_1.default.string,
    maxResults: prop_types_1.default.number,
    resource: prop_types_1.default.string,
    sort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    icon: prop_types_1.default.element,
};
exports.default = ExportButton;
