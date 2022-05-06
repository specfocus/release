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
exports.useStyles = exports.PATCH = exports.FOREWARD = exports.BACKWARD = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SpeedDial_1 = __importDefault(require("@mui/lab/SpeedDial"));
const SpeedDialAction_1 = __importDefault(require("@mui/material/SpeedDialAction"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const Divider_1 = __importDefault(require("@mui/material/Divider"));
const Step_1 = __importDefault(require("@mui/material/Step"));
const Stepper_1 = __importDefault(require("@mui/material/Stepper"));
const Tabs_1 = __importDefault(require("@mui/material/Tabs"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const styles_1 = require("@mui/styles");
const react_1 = require("react");
const TranslatedStepLabel_1 = __importDefault(require("../../components/TranslatedStepLabel"));
const TranslatedTab_1 = __importDefault(require("../../components/TranslatedTab"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
exports.BACKWARD = 'BACKWARD';
exports.FOREWARD = 'FOREWARD';
exports.PATCH = 'NAV_TO';
function tabProps(index) {
    return {
        key: `tab-${index}`,
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}
function panelProps(index) {
    return {
        role: 'tabpanel',
        key: `tabpanel-${index}`,
        id: `tabpanel-${index}`,
        'aria-labelledby': `tab-${index}`,
    };
}
exports.useStyles = (0, styles_1.makeStyles)((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    divider: {
        margin: theme.spacing(4, 0, 2, 0)
    },
    header: {
        display: 'block',
        justifyContent: 'stretch',
        marginBottom: 0
    },
    content: {
        marginTop: 0
    },
    container: {
        display: 'block',
        height: `calc(100% - ${theme.spacing(6)}px)`,
        overflowY: 'auto',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2)
    },
    icon: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    },
    speedDial: {
        position: 'fixed',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(.5),
            right: theme.spacing(.5),
        },
    },
    speedDialFav: {
        opacity: .5,
        transition: 'opacity .5s ease-out',
        /*
        '-moz-transition': 'opacity .5s ease-out',
        '-webkit-transition': 'opacity .5s ease-out',
        '-o-transition': 'opacity .5s ease-out',
        `*/
        '&[aria-expanded=true]': {
            opacity: 1
        },
    },
    stepper: {
        padding: theme.spacing(1, 0, 0),
    },
    strip: {
        flexGrow: 1,
        margin: 0,
        padding: 0
    },
    title: {
        flexGrow: 0,
        textAlign: 'center'
    },
    toolbar: {}
}));
function StripPane(_a) {
    var { actions, children, icon: Icon, maxWidth, reducer, sections, subtitle, title, variant } = _a, props = __rest(_a, ["actions", "children", "icon", "maxWidth", "reducer", "sections", "subtitle", "title", "variant"]);
    const classes = (0, exports.useStyles)();
    const [openSpeedDial, setOpenSpeedDial] = (0, react_1.useState)(false);
    const handleSpeedDialClose = () => {
        setOpenSpeedDial(false);
    };
    const handleSpeedDialOpen = () => {
        setOpenSpeedDial(true);
    };
    const widgetReducer = (0, react_1.useCallback)((state, action) => {
        if (reducer) {
            const next = reducer(state, action);
            if (next !== state) {
                return next;
            }
        }
        const { type } = action, values = __rest(action, ["type"]);
        switch (type) {
            case exports.BACKWARD:
                if (!!state.canBack) {
                    return Object.assign(Object.assign({}, state), { index: state.index - 1 });
                }
                break;
            case exports.FOREWARD:
                if (!!state.canNext) {
                    return Object.assign(Object.assign({}, state), { index: state.index + 1 });
                }
                break;
            case exports.PATCH:
                return Object.assign(Object.assign({}, state), values);
            default:
                return state;
        }
        return state;
    }, [reducer]);
    // filter here what the end user can see
    const steps = Object.values(sections);
    const [state, dispatch] = (0, react_1.useReducer)(widgetReducer, { index: 0, canNext: true });
    const handleTabChange = (event, newValue) => {
        console.log('tab', newValue);
        dispatch({ type: exports.PATCH, index: newValue });
    };
    const Strip = (0, react_1.useCallback)(() => {
        switch (variant) {
            case 'stepper':
                return ((0, jsx_runtime_1.jsx)(Stepper_1.default, Object.assign({ activeStep: state.index, className: classes.stepper }, { children: steps.map(({ title }, index) => ((0, jsx_runtime_1.jsx)(Step_1.default, Object.assign({}, tabProps(index), { children: (0, jsx_runtime_1.jsx)(TranslatedStepLabel_1.default, { children: title }, void 0) }), void 0))) }), void 0));
            case 'scroller':
                return ((0, jsx_runtime_1.jsx)(Stepper_1.default, Object.assign({ activeStep: state.index, className: classes.stepper }, { children: steps.map(({ title }, index) => ((0, jsx_runtime_1.jsx)(Step_1.default, Object.assign({}, tabProps(index), { children: (0, jsx_runtime_1.jsx)(TranslatedStepLabel_1.default, { children: title }, void 0) }), void 0))) }), void 0));
            case 'tabs':
                return ((0, jsx_runtime_1.jsx)(Tabs_1.default, Object.assign({ value: state.index, onChange: handleTabChange, "aria-label": "tabs" }, props, { children: steps.map(({ title }, index) => ((0, jsx_runtime_1.jsx)(TranslatedTab_1.default, Object.assign({ label: title }, tabProps(index)), void 0))) }), void 0));
            default:
                return null;
        }
    }, [classes, state, variant]);
    const handleBack = () => { dispatch({ type: exports.BACKWARD }); };
    const handleNext = () => { dispatch({ type: exports.FOREWARD }); };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Toolbar_1.default, Object.assign({ className: classes.header }, { children: [(0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ className: classes.title, color: "inherit", component: "h3", i18nKey: title, variant: "h6", noWrap: true }, { children: title }), void 0), (0, jsx_runtime_1.jsx)(SpeedDial_1.default, Object.assign({ ariaLabel: "SpeedDial example", className: classes.speedDial, FabProps: { className: classes.speedDialFav }, hidden: false, icon: (0, jsx_runtime_1.jsx)(Icon, { className: classes.icon }, void 0), onClose: handleSpeedDialClose, onOpen: handleSpeedDialOpen, open: openSpeedDial, direction: 'down' }, { children: Object.entries(actions).map(([name, { action, icon: Icon, label }]) => ((0, jsx_runtime_1.jsx)(SpeedDialAction_1.default, { icon: (0, jsx_runtime_1.jsx)(Icon, {}, void 0), title: label, onClick: () => dispatch(action) }, name))) }), void 0), (0, jsx_runtime_1.jsx)(Strip, {}, void 0)] }), void 0), !variant || variant === 'scroller' ? ((0, jsx_runtime_1.jsx)(Container_1.default, Object.assign({ className: classes.container, maxWidth: maxWidth }, { children: react_1.Children.toArray(children).map((Child, index) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [index > 0 && ((0, jsx_runtime_1.jsx)(Divider_1.default, { className: classes.divider }, void 0)), Child] }, void 0))) }), void 0)) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: react_1.Children.toArray(children).map((Child, index) => ((0, jsx_runtime_1.jsx)(Container_1.default, Object.assign({ className: classes.container, hidden: state.index !== index, maxWidth: maxWidth }, panelProps(index), { children: state.index === index && Child }), void 0))) }, void 0))] }, void 0));
}
exports.default = StripPane;
