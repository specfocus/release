"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGroupContextProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const FormGroupContext_1 = require("./FormGroupContext");
const useFormContext_1 = require("./useFormContext");
/**
 * This provider allows its input children to register to a specific group.
 * This enables other components in the group to access group properties such as its
 * validation (valid/invalid) or whether its inputs have been updated (dirty/pristine).
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
 * @param props The component props
 * @param {ReactNode} props.children The form group content
 * @param {String} props.name The form group name
 */
const FormGroupContextProvider = ({ children, name, }) => {
    const formContext = (0, useFormContext_1.useFormContext)();
    (0, react_1.useEffect)(() => {
        if (!formContext ||
            !formContext.registerGroup ||
            !formContext.unregisterGroup) {
            console.warn(`The FormGroupContextProvider can only be used inside a FormContext such as provided by the SimpleForm and TabbedForm components`);
            return;
        }
        formContext.registerGroup(name);
        return () => {
            formContext.unregisterGroup(name);
        };
    }, [formContext, name]);
    return ((0, jsx_runtime_1.jsx)(FormGroupContext_1.FormGroupContext.Provider, Object.assign({ value: name }, { children: children }), void 0));
};
exports.FormGroupContextProvider = FormGroupContextProvider;
