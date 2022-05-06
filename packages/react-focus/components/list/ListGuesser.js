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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const inflection_1 = __importDefault(require("inflection"));
const core_1 = require("../../features/core");
const ListView_1 = __importDefault(require("./ListView"));
const listFieldTypes_1 = __importDefault(require("./listFieldTypes"));
/**
 * List component rendering a <Datagrid> based on the result of the
 * dataProvider.getList() call.
 *
 * The result (choice and type of columns) isn't configurable, but the
 * <ListGuesser> outputs the <Datagrid> it has guessed to the console so that
 * developers can start from there.
 *
 * To be used as the list prop of a <Resource>.
 *
 * @example
 *
 * import { Admin, Resource, ListGuesser } from '../../app';
 *
 * const App = () => (
 *     <Admin dataProvider={myDataProvider}>
 *         <Resource name="posts" list={ListGuesser} />
 *     </Admin>
 * );
 */
const ListGuesser = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const controllerProps = (0, core_1.useListController)(props);
    return ((0, jsx_runtime_1.jsx)(core_1.ListContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsx)(ListViewGuesser, Object.assign({}, props, controllerProps, { children: children }), void 0) }), void 0));
};
const ListViewGuesser = (props) => {
    const { ids, data } = props;
    const resource = (0, core_1.useResourceContext)(props);
    const [inferredChild, setInferredChild] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (ids.length > 0 && data && !inferredChild) {
            const inferredElements = (0, core_1.getElementsFromRecords)(ids.map(id => data[id]), 
            // @ts-ignore
            listFieldTypes_1.default);
            const inferredChild = new core_1.InferredElement(listFieldTypes_1.default.table, null, inferredElements);
            process.env.NODE_ENV !== 'production' &&
                // eslint-disable-next-line no-console
                console.log(`Guessed List:

export const ${inflection_1.default.capitalize(inflection_1.default.singularize(resource))}List = props => (
    <List {...props}>
${inferredChild.getRepresentation()}
    </List>
);`);
            setInferredChild(inferredChild.getElement());
        }
    }, [data, ids, inferredChild, resource]);
    return (0, jsx_runtime_1.jsx)(ListView_1.default, Object.assign({}, props, { children: inferredChild }), void 0);
};
ListViewGuesser.propTypes = ListView_1.default.propTypes;
exports.default = ListGuesser;
