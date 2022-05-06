"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTimeout = exports.useDeepCompareEffect = exports.usePrevious = exports.useSafeSetState = void 0;
const react_1 = require("react");
const isEqual_1 = __importDefault(require("lodash/isEqual"));
// thanks Kent C Dodds for the following helpers
function useSafeSetState(initialState) {
    const [state, setState] = (0, react_1.useState)(initialState);
    const mountedRef = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);
    const safeSetState = (0, react_1.useCallback)(args => {
        if (mountedRef.current) {
            return setState(args);
        }
    }, [mountedRef, setState]);
    return [state, safeSetState];
}
exports.useSafeSetState = useSafeSetState;
function usePrevious(value) {
    const ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        ref.current = value;
    });
    return ref.current;
}
exports.usePrevious = usePrevious;
function useDeepCompareEffect(callback, inputs) {
    const cleanupRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        if (!(0, isEqual_1.default)(previousInputs, inputs)) {
            cleanupRef.current = callback();
        }
        return cleanupRef.current;
    });
    const previousInputs = usePrevious(inputs);
}
exports.useDeepCompareEffect = useDeepCompareEffect;
function useTimeout(ms = 0) {
    const [ready, setReady] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        let timer = setTimeout(() => {
            setReady(true);
        }, ms);
        return () => {
            clearTimeout(timer);
        };
    }, [ms]);
    return ready;
}
exports.useTimeout = useTimeout;
