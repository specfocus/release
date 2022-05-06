"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
/**
 * Reset the submission error when the corresponding field changes.
 * final-form doesn't do this by default.
 */
const useResetSubmitErrors = () => {
    const form = (0, react_final_form_1.useForm)();
    const prevValues = (0, react_1.useRef)(form.getState().values);
    (0, react_1.useEffect)(() => {
        const unsubscribe = form.subscribe(({ values }) => {
            form.mutators.resetSubmitErrors({
                current: values,
                prev: prevValues.current,
            });
            prevValues.current = values;
        }, { values: true });
        return unsubscribe;
    }, [form]);
};
exports.default = useResetSubmitErrors;
