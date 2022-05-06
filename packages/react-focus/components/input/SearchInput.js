"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Search_1 = __importDefault(require("@mui/icons-material/Search"));
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
const TextInput_1 = __importDefault(require("./TextInput"));
const PREFIX = 'RaSearchInput';
const classes = {
    input: `${PREFIX}-input`,
};
const StyledTextInput = (0, styles_1.styled)(TextInput_1.default)({
    [`&.${classes.input}`]: {
        marginTop: 32,
    },
});
const SearchInput = (props) => {
    const translate = (0, core_1.useTranslate)();
    if (props.label) {
        throw new Error("<SearchInput> isn't designed to be used with a label prop. Use <TextInput> if you need a label.");
    }
    return ((0, jsx_runtime_1.jsx)(StyledTextInput, Object.assign({ hiddenLabel: true, label: "", resettable: true, placeholder: translate('ra.action.search'), InputProps: {
            endAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "end" }, { children: (0, jsx_runtime_1.jsx)(Search_1.default, { color: "disabled" }, void 0) }), void 0)),
        }, className: classes.input }, props), void 0));
};
exports.default = SearchInput;
