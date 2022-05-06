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
exports.useStyles = exports.panelProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SpeedDial_1 = __importDefault(require("@mui/material/SpeedDial"));
const SpeedDialAction_1 = __importDefault(require("@mui/material/SpeedDialAction"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const Step_1 = __importDefault(require("@mui/material/Step"));
const Stepper_1 = __importDefault(require("@mui/material/Stepper"));
const Tabs_1 = __importDefault(require("@mui/material/Tabs"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const styles_1 = require("@mui/styles");
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const TranslatedStepLabel_1 = __importDefault(require("../../components/TranslatedStepLabel"));
const TranslatedTab_1 = __importDefault(require("../../components/TranslatedTab"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const ObjectSchema_1 = require("../../lib/ObjectSchema");
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
        key: `panel-${index}`,
        id: `panel-${index}`,
        'aria-labelledby': `tab-${index}`,
    };
}
exports.panelProps = panelProps;
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
    container: {
        flexGrow: 1,
        overflowY: 'auto',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
        '&[hidden]': {
            display: 'none'
        }
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
    toolbar: {
        display: 'block',
        flexGrow: 0,
        height: theme.spacing(8),
        justifyContent: 'stretch'
    }
}));
function FormPanel(_a) {
    var { activeIndex, activeChange, actions, children } = _a, _b = _a.formProps, { render: renderForm } = _b, formProps = __rest(_b, ["render"]), { icon: Icon, maxWidth, reducer, sections, subtitle, title, variant } = _a, props = __rest(_a, ["activeIndex", "activeChange", "actions", "children", "formProps", "icon", "maxWidth", "reducer", "sections", "subtitle", "title", "variant"]);
    const classes = (0, exports.useStyles)();
    const [state, dispatch] = (0, react_1.useReducer)(reducer, { index: 0, canNext: true });
    const [openSpeedDial, setOpenSpeedDial] = (0, react_1.useState)(false);
    const handleSpeedDialClose = () => {
        setOpenSpeedDial(false);
    };
    const handleSpeedDialOpen = () => {
        setOpenSpeedDial(true);
    };
    // filter here what the end user can see
    const steps = Object.values(sections);
    const handleTabChange = (event, newValue) => {
        activeChange(newValue);
    };
    const Strip = (0, react_1.useCallback)(() => {
        switch (variant) {
            case 'stepper':
                return ((0, jsx_runtime_1.jsx)(Stepper_1.default, Object.assign({ activeStep: activeIndex, className: classes.stepper }, { children: steps.map(({ title }, index) => ((0, jsx_runtime_1.jsx)(Step_1.default, Object.assign({}, tabProps(index), { children: (0, jsx_runtime_1.jsx)(TranslatedStepLabel_1.default, { children: title }, void 0) }), void 0))) }), void 0));
            case 'scroller':
                return ((0, jsx_runtime_1.jsx)(Stepper_1.default, Object.assign({ activeStep: activeIndex, className: classes.stepper }, { children: steps.map(({ title }, index) => ((0, jsx_runtime_1.jsx)(Step_1.default, Object.assign({}, tabProps(index), { onClick: () => activeChange(index) }, { children: (0, jsx_runtime_1.jsx)(TranslatedStepLabel_1.default, { children: title }, void 0) }), void 0))) }), void 0));
            case 'tabs':
                return ((0, jsx_runtime_1.jsx)(Tabs_1.default, Object.assign({ value: activeIndex, onChange: handleTabChange, "aria-label": "tabs" }, props, { children: steps.map(({ title }, index) => ((0, jsx_runtime_1.jsx)(TranslatedTab_1.default, Object.assign({ label: title }, tabProps(index)), void 0))) }), void 0));
            default:
                return null;
        }
    }, [classes, activeIndex, variant]);
    const renderContent = (props) => {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Toolbar_1.default, Object.assign({ className: classes.toolbar }, { children: [(0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ className: classes.title, color: "inherit", component: "h3", i18nKey: title, variant: "h6", noWrap: true }, { children: title }), void 0), (0, jsx_runtime_1.jsx)(SpeedDial_1.default, Object.assign({ ariaLabel: "SpeedDial example", className: classes.speedDial, FabProps: { className: classes.speedDialFav }, hidden: false, icon: (0, jsx_runtime_1.jsx)(Icon, { className: classes.icon }, void 0), onClose: handleSpeedDialClose, onOpen: handleSpeedDialOpen, open: openSpeedDial, direction: 'down' }, { children: Object.entries(actions).map(([name, { action, icon: Icon, label }]) => ((0, jsx_runtime_1.jsx)(SpeedDialAction_1.default, { icon: (0, jsx_runtime_1.jsx)(Icon, {}, void 0), tooltipTitle: label, onClick: () => dispatch(action) }, name))) }), void 0), (0, jsx_runtime_1.jsx)(Strip, {}, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Container_1.default, Object.assign({ className: classes.container, maxWidth: maxWidth }, { children: renderForm(props) }), void 0)] }, void 0));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_final_form_1.Form, Object.assign({}, formProps, { render: (props) => {
                    if (props.values) {
                        return renderContent(Object.assign(Object.assign({}, props), { values: Object.assign((0, ObjectSchema_1.flatten)(props.values), { activeIndex }) }));
                    }
                    return ((0, jsx_runtime_1.jsx)(react_final_form_1.FormSpy, Object.assign({ subscription: { values: true } }, { children: ({ values }) => {
                            return renderContent(Object.assign(Object.assign({}, props), { values: Object.assign((0, ObjectSchema_1.flatten)(values), { activeIndex }) }));
                        } }), void 0));
                } }), void 0), react_1.Children.toArray(children).map((Child, index) => ((0, jsx_runtime_1.jsx)(Container_1.default, Object.assign({ className: classes.container, hidden: state.index !== index + 4, maxWidth: maxWidth }, panelProps(index), { children: state.index === index + 4 && Child }), void 0)))] }, void 0));
}
exports.default = FormPanel;
;
