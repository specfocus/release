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
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const react_redux_1 = require("react-redux");
const react_dropzone_1 = require("react-dropzone");
const FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const Labeled_1 = __importDefault(require("./Labeled"));
const FileInputPreview_1 = __importDefault(require("./FileInputPreview"));
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const PREFIX = 'RaFileInput';
const classes = {
    dropZone: `${PREFIX}-dropZone`,
    preview: `${PREFIX}-preview`,
    removeButton: `${PREFIX}-removeButton`,
    root: `${PREFIX}-root`,
};
const StyledLabeled = (0, styles_1.styled)(Labeled_1.default)(({ theme }) => ({
    [`& .${classes.dropZone}`]: {
        background: theme.palette.background.default,
        cursor: 'pointer',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.getContrastText(theme.palette.background.default),
    },
    [`& .${classes.preview}`]: {},
    [`& .${classes.removeButton}`]: {},
    [`&.${classes.root}`]: { width: '100%' },
}));
const FileInput = (props) => {
    const { accept, children, className, format, helperText, label, labelMultiple = 'ra.input.file.upload_several', labelSingle = 'ra.input.file.upload_single', maxSize, minSize, multiple = false } = props, _a = props.options, _b = _a === void 0 ? {} : _a, { inputProps: inputPropsOptions } = _b, options = __rest(_b, ["inputProps"]), { parse, placeholder, resource, source, validate } = props, rest = __rest(props, ["accept", "children", "className", "format", "helperText", "label", "labelMultiple", "labelSingle", "maxSize", "minSize", "multiple", "options", "parse", "placeholder", "resource", "source", "validate"]);
    const translate = (0, core_1.useTranslate)();
    // turn a browser dropped file structure into expected structure
    const transformFile = file => {
        if (!(file instanceof File)) {
            return file;
        }
        const { source, title } = react_1.Children.only(children).props;
        const preview = URL.createObjectURL(file);
        const transformedFile = {
            rawFile: file,
            [source]: preview,
        };
        if (title) {
            transformedFile[title] = file.name;
        }
        return transformedFile;
    };
    const transformFiles = (files) => {
        if (!files) {
            return multiple ? [] : null;
        }
        if (Array.isArray(files)) {
            return files.map(transformFile);
        }
        return transformFile(files);
    };
    const _c = (0, core_1.useInput)(Object.assign({ format: format || transformFiles, parse: parse || transformFiles, source, type: 'file', validate }, rest)), { id } = _c, _d = _c.input, { onChange, value } = _d, inputProps = __rest(_d, ["onChange", "value"]), { meta, isRequired } = _c;
    const { touched, error, submitError } = meta;
    const files = value ? (Array.isArray(value) ? value : [value]) : [];
    const onDrop = (newFiles, rejectedFiles, event) => {
        const updatedFiles = multiple ? [...files, ...newFiles] : [...newFiles];
        if (multiple) {
            onChange(updatedFiles);
        }
        else {
            onChange(updatedFiles[0]);
        }
        if (options.onDrop) {
            options.onDrop(newFiles, rejectedFiles, event);
        }
    };
    const onRemove = file => () => {
        if (multiple) {
            const filteredFiles = files.filter(stateFile => !(0, react_redux_1.shallowEqual)(stateFile, file));
            onChange(filteredFiles);
        }
        else {
            onChange(null);
        }
        if (options.onRemove) {
            options.onRemove(file);
        }
    };
    const childrenElement = children && (0, react_1.isValidElement)(react_1.Children.only(children))
        ? react_1.Children.only(children)
        : undefined;
    const { getRootProps, getInputProps } = (0, react_dropzone_1.useDropzone)(Object.assign(Object.assign({}, options), { accept,
        maxSize,
        minSize,
        multiple,
        onDrop }));
    return ((0, jsx_runtime_1.jsx)(StyledLabeled, Object.assign({ id: id, label: label, className: (0, classnames_1.default)(classes.root, className), source: source, resource: resource, isRequired: isRequired, meta: meta }, (0, sanitizeInputRestProps_1.default)(rest), { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ "data-testid": "dropzone", className: classes.dropZone }, getRootProps(), { children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ id: id }, getInputProps(Object.assign(Object.assign({}, inputProps), inputPropsOptions))), void 0), placeholder ? (placeholder) : multiple ? ((0, jsx_runtime_1.jsx)("p", { children: translate(labelMultiple) }, void 0)) : ((0, jsx_runtime_1.jsx)("p", { children: translate(labelSingle) }, void 0))] }), void 0), (0, jsx_runtime_1.jsx)(FormHelperText_1.default, { children: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0) }, void 0), children && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "previews" }, { children: files.map((file, index) => ((0, jsx_runtime_1.jsx)(FileInputPreview_1.default, Object.assign({ file: file, onRemove: onRemove(file), className: classes.removeButton }, { children: (0, react_1.cloneElement)(childrenElement, {
                            record: file,
                            className: classes.preview,
                        }) }), index))) }), void 0))] }, void 0) }), void 0));
};
FileInput.propTypes = {
    accept: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    id: prop_types_1.default.string,
    isRequired: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    labelMultiple: prop_types_1.default.string,
    labelSingle: prop_types_1.default.string,
    maxSize: prop_types_1.default.number,
    minSize: prop_types_1.default.number,
    multiple: prop_types_1.default.bool,
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    placeholder: prop_types_1.default.node,
};
exports.default = FileInput;
