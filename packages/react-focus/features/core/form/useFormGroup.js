"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormGroupState = exports.useFormGroup = void 0;
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const useFormContext_1 = require("./useFormContext");
/**
 * Retrieve a specific form group data such as its validation status (valid/invalid) or
 * or whether its inputs have been updated (dirty/pristine)
 *
 * @example
 * import { Edit, SimpleForm, TextInput, FormGroupContextProvider, useFormGroup } from '../app';
 * import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *             <FormGroupContextProvider name="options">
 *                 <Accordion>
 *                     <AccordionSummary
 *                         expandIcon={<ExpandMoreIcon />}
 *                         aria-controls="options-content"
 *                         id="options-header"
 *                     >
 *                         <AccordionSectionTitle name="options">Options</AccordionSectionTitle>
 *                     </AccordionSummary>
 *                     <AccordionDetails id="options-content" aria-labelledby="options-header">
 *                         <TextInput source="teaser" validate={minLength(20)} />
 *                     </AccordionDetails>
 *                 </Accordion>
 *             </FormGroupContextProvider>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * const AccordionSectionTitle = ({ children, name }) => {
 *     const formGroupState = useFormGroup(name);
 *     return (
 *         <Typography color={formGroupState.invalid && formGroupState.dirty ? 'error' : 'inherit'}>
 *             {children}
 *         </Typography>
 *     );
 * }
 *
 * @param {string} name The form group name
 * @returns {FormGroupState} The form group state
 */
const useFormGroup = (name) => {
    const form = (0, react_final_form_1.useForm)();
    const formContext = (0, useFormContext_1.useFormContext)();
    const [state, setState] = (0, react_1.useState)({
        dirty: false,
        errors: undefined,
        invalid: false,
        pristine: true,
        touched: false,
        valid: true,
    });
    (0, react_1.useEffect)(() => {
        const unsubscribe = form.subscribe(() => {
            const fields = formContext.getGroupFields(name);
            const fieldStates = fields
                .map(field => {
                return form.getFieldState(field);
            })
                .filter(fieldState => fieldState != undefined); // eslint-disable-line
            const newState = (0, exports.getFormGroupState)(fieldStates);
            setState(oldState => {
                if (!(0, isEqual_1.default)(oldState, newState)) {
                    return newState;
                }
                return oldState;
            });
        }, {
            errors: true,
            invalid: true,
            dirty: true,
            pristine: true,
            valid: true,
            touched: true,
        });
        return unsubscribe;
    }, [form, formContext, name]);
    return state;
};
exports.useFormGroup = useFormGroup;
/**
 * Get the state of a form group
 *
 * @param {FieldState[]} fieldStates A map of field states from final-form where the key is the field name.
 * @returns {FormGroupState} The state of the group.
 */
const getFormGroupState = (fieldStates) => {
    return fieldStates.reduce((acc, fieldState) => {
        let errors = acc.errors || {};
        if (fieldState.error) {
            errors[fieldState.name] = fieldState.error;
        }
        const newState = {
            dirty: acc.dirty || fieldState.dirty,
            errors,
            invalid: acc.invalid || fieldState.invalid,
            pristine: acc.pristine && fieldState.pristine,
            touched: acc.touched || fieldState.touched,
            valid: acc.valid && fieldState.valid,
        };
        return newState;
    }, {
        dirty: false,
        errors: undefined,
        invalid: false,
        pristine: true,
        valid: true,
        touched: false,
    });
};
exports.getFormGroupState = getFormGroupState;
