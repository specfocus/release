"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const inflection_1 = __importDefault(require("inflection"));
const core_1 = require("../../features/core");
const ShowView_1 = require("./ShowView");
const showFieldTypes_1 = __importDefault(require("./showFieldTypes"));
const ShowViewGuesser = props => {
    const resource = (0, core_1.useResourceContext)(props);
    const { record } = (0, core_1.useShowContext)();
    const [inferredChild, setInferredChild] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (record && !inferredChild) {
            const inferredElements = (0, core_1.getElementsFromRecords)([record], showFieldTypes_1.default);
            const inferredChild = new core_1.InferredElement(showFieldTypes_1.default.show, null, inferredElements);
            process.env.NODE_ENV !== 'production' &&
                // eslint-disable-next-line no-console
                console.log(`Guessed Show:

export const ${inflection_1.default.capitalize(inflection_1.default.singularize(resource))}Show = props => (
    <Show {...props}>
${inferredChild.getRepresentation()}
    </Show>
);`);
            setInferredChild(inferredChild.getElement());
        }
    }, [record, inferredChild, resource]);
    return (0, jsx_runtime_1.jsx)(ShowView_1.ShowView, Object.assign({}, props, { children: inferredChild }), void 0);
};
ShowViewGuesser.propTypes = ShowView_1.ShowView.propTypes;
const ShowGuesser = props => {
    const controllerProps = (0, core_1.useShowController)(props);
    return ((0, jsx_runtime_1.jsx)(core_1.ShowContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsx)(ShowViewGuesser, Object.assign({}, props, controllerProps), void 0) }), void 0));
};
exports.default = ShowGuesser;
