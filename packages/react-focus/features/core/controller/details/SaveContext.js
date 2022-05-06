"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePickSaveContext = exports.useSaveContext = exports.SaveContextProvider = exports.SaveContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const pick_1 = __importDefault(require("lodash/pick"));
exports.SaveContext = (0, react_1.createContext)(undefined);
const SaveContextProvider = ({ children, value }) => ((0, jsx_runtime_1.jsx)(exports.SaveContext.Provider, Object.assign({ value: value }, { children: children }), void 0));
exports.SaveContextProvider = SaveContextProvider;
/**
 * Get the save() function and its status
 *
 * Used in forms.
 *
 * @example
 *
 * const {
 *     save,
 *     saving
 * } = useSaveContext();
 */
const useSaveContext = (props) => {
    const context = (0, react_1.useContext)(exports.SaveContext);
    if (!context || !context.save || !context.setOnFailure) {
        /**
         * The element isn't inside a <SaveContextProvider>
         * To avoid breakage in that case, fallback to props
         *
         * @deprecated - to be removed in 4.0
         */
        if (process.env.NODE_ENV !== 'production') {
            console.log("Edit or Create child components must be used inside a <SaveContextProvider>. Relying on props rather than context to get persistence related data and callbacks is deprecated and won't be supported in the next major version of ../../app.");
        }
        return props;
    }
    return context;
};
exports.useSaveContext = useSaveContext;
const usePickSaveContext = (context) => {
    const value = (0, react_1.useMemo)(() => (0, pick_1.default)(context, [
        'save',
        'saving',
        'setOnFailure',
        'setOnSuccess',
        'setTransform',
        'onSuccessRef',
        'onFailureRef',
        'transformRef',
    ]), 
    /* eslint-disable react-hooks/exhaustive-deps */
    [
        context.save,
        context.saving,
        context.setOnFailure,
        context.setOnSuccess,
        context.setTransform,
        context.setTransform,
        context.onFailureRef,
        context.onSuccessRef,
        context.transformRef,
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
    );
    return value;
};
exports.usePickSaveContext = usePickSaveContext;
