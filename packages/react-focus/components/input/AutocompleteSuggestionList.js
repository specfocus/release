"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const material_1 = require("@mui/material");
const PREFIX = 'RaAutocompleteSuggestionList';
const classes = {
    suggestionsContainer: `${PREFIX}-suggestionsContainer`,
    suggestionsPaper: `${PREFIX}-suggestionsPaper`,
};
const StyledPopper = (0, styles_1.styled)(material_1.Popper)({
    [`&.${classes.suggestionsContainer}`]: {
        zIndex: 2,
    },
    [`& .${classes.suggestionsPaper}`]: {
        maxHeight: '50vh',
        overflowY: 'auto',
    },
});
const PopperModifiers = [];
const AutocompleteSuggestionList = (props) => {
    const { children, className, isOpen, menuProps, inputEl, suggestionsContainerProps, } = props;
    return ((0, jsx_runtime_1.jsx)(StyledPopper, Object.assign({ open: isOpen, anchorEl: inputEl, className: (0, classnames_1.default)(classes.suggestionsContainer, className), modifiers: PopperModifiers }, suggestionsContainerProps, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({}, (isOpen ? menuProps : {}), { children: (0, jsx_runtime_1.jsx)(material_1.Paper, Object.assign({ square: true, style: {
                    marginTop: 8,
                    minWidth: inputEl ? inputEl.clientWidth : null,
                }, className: classes.suggestionsPaper }, { children: children }), void 0) }), void 0) }), void 0));
};
exports.default = AutocompleteSuggestionList;
