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
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const LinearProgress_1 = __importDefault(require("@mui/material/LinearProgress"));
const core_1 = require("../../features/core");
const Link_1 = __importDefault(require("../Link"));
const PREFIX = 'RaSingleFieldList';
const classes = {
    root: `${PREFIX}-root`,
    link: `${PREFIX}-link`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`& .${classes.root}`]: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: -theme.spacing(1),
        marginBottom: -theme.spacing(1),
    },
    [`& .${classes.link}`]: {},
}));
// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();
// Our handleClick does nothing as we wrap the children inside a Link but it is
// required by ChipField, which uses a Chip from material-ui.
// The material-ui Chip requires an onClick handler to behave like a clickable element.
const handleClick = () => { };
/**
 * Iterator component to be used to display a list of entities, using a single field
 *
 * @example Display all the books by the current author
 * <ReferenceManyField reference="books" target="author_id">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * By default, it includes a link to the <Edit> page of the related record
 * (`/books/:id` in the previous example).
 *
 * Set the linkType prop to "show" to link to the <Show> page instead.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType="show">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * You can also prevent `<SingleFieldList>` from adding link to children by setting
 * `linkType` to false.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType={false}>
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 */
const SingleFieldList = (props) => {
    const { className, children, linkType = 'edit', component = Root } = props, rest = __rest(props, ["className", "children", "linkType", "component"]);
    const { ids, data, loaded, basePath } = (0, core_1.useListContext)(props);
    const resource = (0, core_1.useResourceContext)(props);
    const Component = component;
    if (loaded === false) {
        return (0, jsx_runtime_1.jsx)(LinearProgress_1.default, {}, void 0);
    }
    return ((0, jsx_runtime_1.jsx)(Component, Object.assign({ className: (0, classnames_1.default)(classes.root, className) }, (0, core_1.sanitizeListRestProps)(rest), { children: ids.map(id => {
            const resourceLinkPath = !linkType
                ? false
                : (0, core_1.linkToRecord)(basePath, id, linkType);
            if (resourceLinkPath) {
                return ((0, jsx_runtime_1.jsx)(core_1.RecordContextProvider, Object.assign({ value: data[id] }, { children: (0, jsx_runtime_1.jsx)(Link_1.default, Object.assign({ className: classes.link, to: resourceLinkPath, onClick: stopPropagation }, { children: (0, react_1.cloneElement)(react_1.Children.only(children), {
                            record: data[id],
                            resource,
                            basePath,
                            // Workaround to force ChipField to be clickable
                            onClick: handleClick,
                        }) }), id) }), id));
            }
            return ((0, jsx_runtime_1.jsx)(core_1.RecordContextProvider, Object.assign({ value: data[id] }, { children: (0, react_1.cloneElement)(react_1.Children.only(children), {
                    key: id,
                    record: data[id],
                    resource,
                    basePath,
                }) }), id));
        }) }), void 0));
};
SingleFieldList.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    component: core_1.ComponentPropType,
    data: prop_types_1.default.any,
    ids: prop_types_1.default.array,
    // @ts-ignore
    linkType: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    resource: prop_types_1.default.string,
};
exports.default = SingleFieldList;
