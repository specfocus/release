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
exports.useStyles = exports.STEPPER_NEXT = exports.STEPPER_BACK = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const Step_1 = __importDefault(require("@mui/material/Step"));
const Stepper_1 = __importDefault(require("@mui/material/Stepper"));
const styles_1 = require("@mui/styles");
const react_1 = require("react");
const TranslatedButton_1 = __importDefault(require("../../components/TranslatedButton"));
const TranslatedStepLabel_1 = __importDefault(require("../../components/TranslatedStepLabel"));
const Copyright_1 = __importDefault(require("./Copyright"));
const Frame_1 = __importDefault(require("./Frame"));
exports.STEPPER_BACK = 'STEPPER_BACK';
exports.STEPPER_NEXT = 'STEPPER_NEXT';
function stepProps(index) {
    return {
        key: `step-${index}`,
        id: `step-${index}`,
        'aria-controls': `steppanel-${index}`,
    };
}
function panelProps(index) {
    return {
        role: 'steppanel',
        key: `steppanel-${index}`,
        id: `steppanel-${index}`,
        'aria-labelledby': `step-${index}`,
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
    header: {
        height: theme.spacing(6),
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
    stepper: {
        padding: theme.spacing(3, 0, 5),
    }
}));
function StepperFrame(_a) {
    var { children, maxWidth, reducer, sections } = _a, props = __rest(_a, ["children", "maxWidth", "reducer", "sections"]);
    const classes = (0, exports.useStyles)();
    const stepperReducer = (0, react_1.useCallback)((state, action) => {
        const { type } = action, values = __rest(action, ["type"]);
        switch (type) {
            case exports.STEPPER_BACK:
                if (!!state.canBack) {
                    return Object.assign(Object.assign({}, state), { activeStep: state.activeStep - 1 });
                }
                break;
            case exports.STEPPER_NEXT:
                if (!!state.canNext) {
                    return Object.assign(Object.assign({}, state), { activeStep: state.activeStep + 1 });
                }
                break;
            default:
                return state;
        }
        return state;
    }, [reducer]);
    const [state, dispatch] = (0, react_1.useReducer)(stepperReducer, { activeStep: 0, canNext: true });
    const { activeStep, canBack, canNext } = state;
    // useEffect(() => { setTimeout(() => setActiveStep(0), 500); }, [setActiveStep]);
    const handleBack = (0, react_1.useCallback)(() => {
        if (canBack) {
            dispatch({ type: exports.STEPPER_BACK });
        }
    }, [dispatch]);
    const handleNext = (0, react_1.useCallback)(() => {
        if (canNext) {
            dispatch({ type: exports.STEPPER_NEXT });
        }
    }, [dispatch]);
    // filter here what the end user can see
    const steps = Object.values(sections);
    return ((0, jsx_runtime_1.jsxs)(Frame_1.default, Object.assign({}, props, { children: [(0, jsx_runtime_1.jsx)(Container_1.default, Object.assign({ className: classes.header, maxWidth: maxWidth }, { children: (0, jsx_runtime_1.jsx)(Stepper_1.default, Object.assign({ activeStep: activeStep, className: classes.stepper }, { children: steps.map(({ title }, index) => ((0, jsx_runtime_1.jsx)(Step_1.default, Object.assign({}, stepProps(index), { children: (0, jsx_runtime_1.jsx)(TranslatedStepLabel_1.default, { children: title }, void 0) }), void 0))) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.container }, { children: (0, jsx_runtime_1.jsxs)(Container_1.default, Object.assign({ className: classes.content, maxWidth: maxWidth }, { children: [react_1.Children.toArray(children).map((Child, index) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ hidden: activeStep !== index }, panelProps(index), { children: activeStep === index && Child }), void 0))), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.buttons }, { children: [activeStep !== 0 && ((0, jsx_runtime_1.jsx)(TranslatedButton_1.default, Object.assign({ disabled: !canBack, onClick: handleBack, className: classes.button }, { children: "Back" }), void 0)), (0, jsx_runtime_1.jsx)(TranslatedButton_1.default, Object.assign({ disabled: !canNext, variant: "contained", color: "primary", onClick: handleNext, className: classes.button }, { children: activeStep === steps.length - 1 ? 'Place order' : 'Next' }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ pt: 4 }, { children: (0, jsx_runtime_1.jsx)(Copyright_1.default, {}, void 0) }), void 0)] }), void 0) }), void 0)] }), void 0));
}
exports.default = StepperFrame;
