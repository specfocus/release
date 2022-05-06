"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePreset = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const deep_diff_1 = require("deep-diff");
const final_form_1 = require("final-form");
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const sift_1 = __importDefault(require("sift"));
const flatten = (schema, acc = {}, path = []) => Object.entries(schema.fields).reduce(($acc, [key, field]) => {
    const $path = [...path, key];
    if (field.type === 'object') {
        return flatten(field, $acc, $path);
    }
    const $key = $path.join('.');
    return Object.assign($acc, { [$key]: field });
}, acc);
const select = (schema) => {
    const driver = Object.entries(schema)
        .reduce((acc, [key, { preset }]) => Object.assign(acc, { [key]: preset || {} }), {});
    Object.entries(driver).forEach(([key, preset]) => {
    });
    return driver;
};
const intersect = (lhs, rhs) => lhs.filter(x => rhs.includes(x));
const usePreset = ({ presets, schema, values }) => {
    const [state, setState] = (0, react_1.useState)({});
    const [previous, setPrevious] = (0, react_1.useState)();
    const [skip, setSkip] = (0, react_1.useState)(false);
    const { batch, change } = (0, react_final_form_1.useForm)();
    if (state === values) {
        return;
    }
    const differences = (0, deep_diff_1.diff)(state, values || {});
    if (!differences) {
        return;
    }
    const changes = differences.reduce((acc, { path, rhs }) => {
        const key = path.join('.');
        const v = (0, final_form_1.getIn)(state, key);
        Object.assign(acc, { [key]: rhs });
        return acc;
    }, {});
    if (previous && !(0, deep_diff_1.diff)(changes, previous)) {
        return;
    }
    setPrevious(changes);
    setState(values);
    if (skip) {
        return;
    }
    const keys = Object.keys(changes);
    const actions = presets.reduce((acc, { $if, $then, $else }) => {
        const inter = intersect(Object.keys($if), keys);
        if (!inter.length) {
            return acc;
        }
        // @ts-ignore
        const $test = (0, sift_1.default)($if);
        // @ts-ignore
        const $match = $test(values);
        if ($match && $then) {
            return $then;
        }
        if (!$match && $else) {
            return $else;
        }
        return acc;
    }, {});
    console.log(JSON.stringify(actions, null, 2));
    if (!Object.keys(actions).length) {
        return;
    }
    setSkip(true);
    batch(() => {
        Object.entries(actions).forEach(([name, value]) => change(name, value));
        //setSkip(false), 10);
        setSkip(false);
    });
};
exports.usePreset = usePreset;
const Controller = (props) => {
    (0, exports.usePreset)(props);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0));
};
const Wrapper = (props) => {
    return props.values ? ((0, jsx_runtime_1.jsx)(Controller, Object.assign({}, props), void 0)) : ((0, jsx_runtime_1.jsx)(react_final_form_1.FormSpy, Object.assign({ subscription: { values: true } }, { children: ({ values }) => ((0, jsx_runtime_1.jsx)(Controller, Object.assign({}, props, { values: values }), void 0)) }), void 0));
};
exports.default = Wrapper;
