"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empty = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const Inbox_1 = __importDefault(require("@mui/icons-material/Inbox"));
const core_1 = require("../../features/core");
const button_1 = require("../button");
const PREFIX = 'RaEmpty';
const classes = {
    message: `${PREFIX}-message`,
    icon: `${PREFIX}-icon`,
    toolbar: `${PREFIX}-toolbar`,
};
const Root = (0, styles_1.styled)('span')(({ theme }) => ({
    [`& .${classes.message}`]: {
        textAlign: 'center',
        opacity: theme.palette.mode === 'light' ? 0.5 : 0.8,
        margin: '0 1em',
        color: theme.palette.mode === 'light'
            ? 'inherit'
            : theme.palette.text.primary,
    },
    [`& .${classes.icon}`]: {
        width: '9em',
        height: '9em',
    },
    [`& .${classes.toolbar}`]: {
        textAlign: 'center',
        marginTop: '2em',
    },
}));
const Empty = (props) => {
    const { basePath, hasCreate } = (0, core_1.useListContext)(props);
    const resource = (0, core_1.useResourceContext)(props);
    const translate = (0, core_1.useTranslate)();
    const getResourceLabel = (0, core_1.useGetResourceLabel)();
    const resourceName = translate(`resources.${resource}.forcedCaseName`, {
        smart_count: 0,
        _: getResourceLabel(resource, 0),
    });
    const emptyMessage = translate('ra.page.empty', { name: resourceName });
    const inviteMessage = translate('ra.page.invite');
    return ((0, jsx_runtime_1.jsxs)(Root, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.message }, { children: [(0, jsx_runtime_1.jsx)(Inbox_1.default, { className: classes.icon }, void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h4", paragraph: true }, { children: translate(`resources.${resource}.empty`, {
                            _: emptyMessage,
                        }) }), void 0), hasCreate && ((0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body1" }, { children: translate(`resources.${resource}.invite`, {
                            _: inviteMessage,
                        }) }), void 0))] }), void 0), hasCreate && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.toolbar }, { children: (0, jsx_runtime_1.jsx)(button_1.CreateButton, { variant: "contained", basePath: basePath }, void 0) }), void 0))] }, void 0));
};
exports.Empty = Empty;
