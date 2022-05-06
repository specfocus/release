"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const getFormInitialValues_1 = __importDefault(require("./getFormInitialValues"));
/**
 * Restore the record values which should override any default values specified on the form.
 */
const useInitializeFormWithRecord = record => {
    const form = (0, react_final_form_1.useForm)();
    (0, react_1.useEffect)(() => {
        if (!record) {
            return;
        }
        const initialValues = (0, getFormInitialValues_1.default)(form.getState().initialValues, undefined, record);
        if ((0, isEqual_1.default)(form.getState().initialValues, initialValues)) {
            return;
        }
        // Disable this option when re-initializing the form because in this case, it should reset the dirty state of all fields
        // We do need to keep this option for dynamically added inputs though which is why it is kept at the form level
        form.setConfig('keepDirtyOnReinitialize', false);
        form.restart(initialValues);
        form.setConfig('keepDirtyOnReinitialize', true);
    }, [form, JSON.stringify(record)]); // eslint-disable-line react-hooks/exhaustive-deps
};
exports.default = useInitializeFormWithRecord;
