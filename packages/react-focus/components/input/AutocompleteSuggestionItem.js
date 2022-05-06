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
const parse_1 = __importDefault(require("autosuggest-highlight/parse"));
const match_1 = __importDefault(require("autosuggest-highlight/match"));
const material_1 = require("@mui/material");
const classnames_1 = __importDefault(require("classnames"));
const PREFIX = 'RaAutocompleteSuggestionItem';
const classes = {
    root: `${PREFIX}-root`,
    selected: `${PREFIX}-selected`,
    suggestion: `${PREFIX}-suggestion`,
    suggestionText: `${PREFIX}-suggestionText`,
    highlightedSuggestionText: `${PREFIX}-highlightedSuggestionText`,
};
const StyledMenuItem = (0, styles_1.styled)(material_1.MenuItem)(({ theme }) => ({
    [`&.${classes.root}`]: {
        fontWeight: 400,
    },
    [`&.${classes.selected}`]: {
        fontWeight: 500,
    },
    [`& .${classes.suggestion}`]: {
        display: 'block',
        fontFamily: theme.typography.fontFamily,
        minHeight: 24,
    },
    [`& .${classes.suggestionText}`]: { fontWeight: 300 },
    [`& .${classes.highlightedSuggestionText}`]: { fontWeight: 500 },
}));
const AutocompleteSuggestionItem = (props) => {
    const { createValue, suggestion, index, highlightedIndex, isSelected, filterValue, classes: classesOverride, getSuggestionText } = props, rest = __rest(props, ["createValue", "suggestion", "index", "highlightedIndex", "isSelected", "filterValue", "classes", "getSuggestionText"]);
    const isHighlighted = highlightedIndex === index;
    const suggestionText = 'id' in suggestion && suggestion.id === createValue
        ? suggestion.name
        : getSuggestionText(suggestion);
    let matches;
    let parts;
    if (!(0, react_1.isValidElement)(suggestionText)) {
        matches = (0, match_1.default)(suggestionText, filterValue);
        parts = (0, parse_1.default)(suggestionText, matches);
    }
    return ((0, jsx_runtime_1.jsx)(StyledMenuItem, Object.assign({ selected: isHighlighted, className: (0, classnames_1.default)(classes.root, {
            [classes.selected]: isSelected,
        }) }, rest, { children: (0, react_1.isValidElement)(suggestionText) ? ((0, react_1.cloneElement)(suggestionText, { filterValue })) : ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.suggestion }, { children: parts.map((part, index) => {
                return part.highlight ? ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: classes.highlightedSuggestionText }, { children: part.text }), index)) : ((0, jsx_runtime_1.jsx)("strong", Object.assign({ className: classes.suggestionText }, { children: part.text }), index));
            }) }), void 0)) }), suggestionText));
};
exports.default = AutocompleteSuggestionItem;
