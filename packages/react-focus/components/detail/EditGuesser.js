"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const inflection_1 = __importDefault(require("inflection"));
const core_1 = require("../../features/core");
const EditView_1 = require("./EditView");
const editFieldTypes_1 = __importDefault(require("./editFieldTypes"));
const EditViewGuesser = props => {
    const resource = (0, core_1.useResourceContext)(props);
    const { record } = (0, core_1.useEditContext)();
    const [inferredChild, setInferredChild] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (record && !inferredChild) {
            const inferredElements = (0, core_1.getElementsFromRecords)([record], editFieldTypes_1.default);
            const inferredChild = new core_1.InferredElement(editFieldTypes_1.default.form, null, inferredElements);
            process.env.NODE_ENV !== 'production' &&
                // eslint-disable-next-line no-console
                console.log(`Guessed Edit:

export const ${inflection_1.default.capitalize(inflection_1.default.singularize(resource))}Edit = props => (
    <Edit {...props}>
${inferredChild.getRepresentation()}
    </Edit>
);`);
            setInferredChild(inferredChild.getElement());
        }
    }, [record, inferredChild, resource]);
    return (0, jsx_runtime_1.jsx)(EditView_1.EditView, Object.assign({}, props, { children: inferredChild }), void 0);
};
EditViewGuesser.propTypes = EditView_1.EditView.propTypes;
const EditGuesser = props => {
    const controllerProps = (0, core_1.useEditController)(props);
    return ((0, jsx_runtime_1.jsx)(core_1.EditContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsx)(EditViewGuesser, Object.assign({}, props), void 0) }), void 0));
};
exports.default = EditGuesser;
