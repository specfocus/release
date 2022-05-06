"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataExport = exports.DataExportButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const AppState_1 = require("app/AppState");
const state_1 = require("features/state");
const react_1 = require("react");
const TranslatedTooltip_1 = __importDefault(require("../../components/TranslatedTooltip"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const Export_1 = __importDefault(require("../../icons/Export"));
const DataExportButton = (props) => ((0, jsx_runtime_1.jsx)(TranslatedTooltip_1.default, Object.assign({ title: "Export" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ color: "inherit" }, props, { children: (0, jsx_runtime_1.jsx)(Export_1.default, {}, void 0) }), void 0) }), "data-export-button"));
exports.DataExportButton = DataExportButton;
const DataExport = ({ title }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ component: "h4", variant: "h6" }, { children: title }), void 0) }, void 0));
};
exports.DataExport = DataExport;
function useDataExport() {
    const resetState = (0, state_1.useResetRecoilState)(AppState_1.atomPane);
    const [isOpen, setState] = (0, react_1.useState)(false);
    const close = (0, react_1.useCallback)(() => {
        if (isOpen) {
            resetState();
            setState(false);
        }
    }, [resetState]);
    const reducer = (state, action) => {
        switch (action.type) {
            case 'CLOSE':
                close();
                break;
        }
        return state;
    };
    const setter = (0, state_1.useSetRecoilState)(AppState_1.atomPane);
    const open = (0, react_1.useCallback)(() => {
        setter({
            actions: {
                close: {
                    action: { type: 'CLOSE' },
                    icon: Close_1.default,
                    label: 'Close',
                }
            },
            contentComponent: exports.DataExport,
            icon: Export_1.default,
            maxWidth: 'lg',
            reducer,
            title: "Export"
        });
        setState(true);
    }, [setter]);
    return {
        isOpen,
        close,
        open,
    };
}
exports.default = useDataExport;
