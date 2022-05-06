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
exports.FormDataConsumerView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_final_form_1 = require("react-final-form");
const get_1 = __importDefault(require("lodash/get"));
const warning_1 = __importDefault(require("../util/warning"));
/**
 * Get the current (edited) value of the record from the form and pass it
 * to a child function
 *
 * @example
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <BooleanInput source="hasEmail" />
 *             <FormDataConsumer>
 *                 {({ formData, ...rest }) => formData.hasEmail &&
 *                      <TextInput source="email" {...rest} />
 *                 }
 *             </FormDataConsumer>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 *
 * const OrderEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <SelectInput source="country" choices={countries} />
 *             <FormDataConsumer>
 *                 {({ formData, ...rest }) =>
 *                      <SelectInput
 *                          source="city"
 *                          choices={getCitiesFor(formData.country)}
 *                          {...rest}
 *                      />
 *                 }
 *             </FormDataConsumer>
 *         </SimpleForm>
 *     </Edit>
 * );
 */
const FormDataConsumer = (_a) => {
    var { subscription } = _a, props = __rest(_a, ["subscription"]);
    const formState = (0, react_final_form_1.useFormState)({ subscription });
    return (0, jsx_runtime_1.jsx)(exports.FormDataConsumerView, Object.assign({ formData: formState.values }, props), void 0);
};
const FormDataConsumerView = (props) => {
    const { children, form, formData, source, index } = props, rest = __rest(props, ["children", "form", "formData", "source", "index"]);
    let scopedFormData = formData;
    let getSource;
    let getSourceHasBeenCalled = false;
    let ret;
    // If we have an index, we are in an iterator like component (such as the SimpleFormIterator)
    if (typeof index !== 'undefined') {
        scopedFormData = (0, get_1.default)(formData, source);
        getSource = (scopedSource) => {
            getSourceHasBeenCalled = true;
            return `${source}.${scopedSource}`;
        };
        ret = children(Object.assign({ formData, scopedFormData, getSource }, rest));
    }
    else {
        ret = children(Object.assign({ formData }, rest));
    }
    (0, warning_1.default)(typeof index !== 'undefined' && ret && !getSourceHasBeenCalled, `You're using a FormDataConsumer inside an ArrayInput and you did not call the getSource function supplied by the FormDataConsumer component. This is required for your inputs to get the proper source.

<ArrayInput source="users">
    <SimpleFormIterator>
        <TextInput source="name" />

        <FormDataConsumer>
            {({
                formData, // The whole form data
                scopedFormData, // The data for this item of the ArrayInput
                getSource, // A function to get the valid source inside an ArrayInput
                ...rest,
            }) =>
                scopedFormData.name ? (
                    <SelectInput
                        source={getSource('role')} // Will translate to "users[0].role"
                        choices={['admin', 'user']}
                        {...rest}
                    />
                ) : null
            }
        </FormDataConsumer>
    </SimpleFormIterator>
</ArrayInput>`);
    return ret === undefined ? null : ret;
};
exports.FormDataConsumerView = FormDataConsumerView;
exports.default = FormDataConsumer;
