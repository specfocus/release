"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.SearchPane = exports.SearchMenu = exports.SearchControl = exports.SearchButton = exports.SearchBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ClearAll_1 = __importDefault(require("@mui/icons-material/ClearAll"));
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
// import Divider from '@mui/material/Divider';
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const Search_1 = __importDefault(require("@mui/icons-material/Search"));
// import DirectionsIcon from '@mui/icons-material/Directions';
const material_1 = require("@mui/material");
const Accordion_1 = __importDefault(require("@mui/material/Accordion"));
const AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
const AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
const Divider_1 = __importDefault(require("@mui/material/Divider"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const InputBase_1 = __importDefault(require("@mui/material/InputBase"));
const Menu_2 = __importDefault(require("@mui/material/Menu"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const styles_1 = require("@mui/styles");
const react_1 = __importStar(require("react"));
const recoil_1 = require("recoil");
const AppState_1 = require("../../app/AppState");
const TranslatedChip_1 = __importDefault(require("../../components/TranslatedChip"));
const TranslatedTooltip_1 = __importDefault(require("../../components/TranslatedTooltip"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const SearchState_1 = require("./SearchState");
function removeAt(source, index) {
    const result = source.slice(0, index);
    Array.prototype.push.apply(result, source.slice(index + 1));
    return result;
}
const useSearch = () => {
    const setHistory = (0, recoil_1.useSetRecoilState)(SearchState_1.appSearchHistory);
    return (0, react_1.useCallback)((input) => {
        setHistory(history => {
            const index = history.indexOf(input);
            if (index < 0) {
                return [input, ...history];
            }
            if (index > 0) {
                const next = removeAt(history, index);
                next.unshift(input);
                console.log({ history, next });
                return next;
            }
            console.log({ input, history, index });
            return history;
        });
    }, [setHistory]);
};
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));
const SearchBox = (_a) => {
    var { onMenuClick } = _a, props = __rest(_a, ["onMenuClick"]);
    const [input, setInput] = (0, recoil_1.useRecoilState)(SearchState_1.appSearchInput);
    const resetInput = (0, recoil_1.useResetRecoilState)(SearchState_1.appSearchInput);
    const handleChange = (0, react_1.useCallback)((event) => setInput(event.target.value), [setInput]);
    const search = useSearch();
    const handleSearch = (0, react_1.useCallback)(() => {
        search(input);
        resetInput();
    }, [input, resetInput, search]);
    const handleKeyPress = (0, react_1.useCallback)((event) => {
        if (event.code === 'Enter') {
            search(input);
            resetInput();
        }
    }, [input, resetInput, search]);
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsxs)(Paper_1.default, Object.assign({ className: classes.root }, { children: [onMenuClick && ((0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ className: classes.iconButton, 
                // disabled={!history.length}
                onClick: onMenuClick, "aria-label": "menu" }, { children: (0, jsx_runtime_1.jsx)(Menu_1.default, {}, void 0) }), void 0)), (0, jsx_runtime_1.jsx)(InputBase_1.default, Object.assign({}, props, { className: classes.input, placeholder: "Search", inputProps: { 'aria-label': 'search' }, onChange: handleChange, onKeyPress: handleKeyPress, value: input }), void 0), (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ className: classes.iconButton, disabled: !input, onClick: handleSearch, "aria-label": "search" }, { children: (0, jsx_runtime_1.jsx)(Search_1.default, {}, void 0) }), void 0)] }), void 0));
};
exports.SearchBox = SearchBox;
const SearchButton = (props) => {
    return ((0, jsx_runtime_1.jsx)(TranslatedTooltip_1.default, Object.assign({ title: "Search" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ color: "inherit" }, props, { "aria-label": "search" }, { children: (0, jsx_runtime_1.jsx)(Search_1.default, {}, void 0) }), void 0) }), "data-search-button"));
};
exports.SearchButton = SearchButton;
const SearchControl = () => {
    const [pane, setPane] = (0, recoil_1.useRecoilState)(AppState_1.atomPane);
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const handleMenu = (0, react_1.useCallback)((event) => setAnchorEl(event.currentTarget), [setAnchorEl]);
    const handleClose = (0, react_1.useCallback)(() => setAnchorEl(null), [setAnchorEl]);
    const handlePane = (0, react_1.useCallback)(() => {
        setAnchorEl(null);
        setPane({ contentComponent: exports.SearchPane });
    }, [setAnchorEl, setPane]);
    const isSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('md'));
    (0, react_1.useEffect)(() => {
        if (isSmall) {
            handleClose();
        }
    }, [isSmall]);
    if (isSmall || (pane === null || pane === void 0 ? void 0 : pane.contentComponent) === exports.SearchPane) {
        return ((0, jsx_runtime_1.jsx)(exports.SearchButton, { disabled: (pane === null || pane === void 0 ? void 0 : pane.contentComponent) === exports.SearchPane, onClick: handlePane }, void 0));
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(exports.SearchBox, { onMenuClick: handleMenu }, void 0), (0, jsx_runtime_1.jsx)(exports.SearchMenu, { anchorEl: anchorEl, onBlur: handleClose, onClose: handleClose, onWidget: handlePane, open: Boolean(anchorEl) }, void 0)] }, void 0));
};
exports.SearchControl = SearchControl;
const SearchMenu = (_a) => {
    var { onClose, onWidget } = _a, props = __rest(_a, ["onClose", "onWidget"]);
    const history = (0, recoil_1.useRecoilValue)(SearchState_1.appSearchHistory);
    const [input, setInput] = (0, recoil_1.useRecoilState)(SearchState_1.appSearchInput);
    return ((0, jsx_runtime_1.jsxs)(Menu_2.default, Object.assign({ id: "density-menu", variant: "selectedMenu", anchorEl: null, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }, transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        }, keepMounted: true }, props, { children: [(0, jsx_runtime_1.jsxs)(MenuItem_1.default, Object.assign({ onClick: event => {
                    onWidget();
                } }, { children: [(0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ variant: "caption", sx: { flexGrow: 1 } }, { children: "Expand" }), void 0), (0, jsx_runtime_1.jsx)(Search_1.default, { sx: { flexGrow: 0 } }, void 0)] }), `search-pane`), (0, jsx_runtime_1.jsx)(Divider_1.default, {}, void 0), history.map((text, index) => ((0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ onClick: event => {
                    setInput(text);
                    if (onClose) {
                        onClose(event, "escapeKeyDown");
                    }
                }, selected: text === input }, { children: (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ variant: "inherit" }, { children: text }), void 0) }), `search-history-${index}`)))] }), "table-row-density-menu"));
};
exports.SearchMenu = SearchMenu;
const SearchPane = ({}) => {
    const [history, setHistory] = (0, recoil_1.useRecoilState)(SearchState_1.appSearchHistory);
    const search = useSearch();
    const handleDelete = (0, react_1.useCallback)((index) => {
        console.log('delete', index);
        setHistory(removeAt(history, index));
    }, [history, removeAt, setHistory]);
    const [expanded, setExpanded] = react_1.default.useState();
    const handleExpand = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const searchResults = (0, recoil_1.useRecoilValue)(SearchState_1.appSearchResults);
    const [active] = history;
    const results = searchResults[active === null || active === void 0 ? void 0 : active.toLowerCase()] || [];
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Stack_1.default, Object.assign({ spacing: 1, sx: { flexGrow: 1, overflowY: 'hidden' } }, { children: [(0, jsx_runtime_1.jsx)(exports.SearchBox, {}, void 0), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ container: true, direction: "row", spacing: 1 }, { children: history.map((text, idx) => ((0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(TranslatedChip_1.default, { color: !idx ? 'primary' : 'default', label: text, onClick: event => {
                                search(text);
                            }, value: idx, onDelete: () => handleDelete(idx), 
                            // size="small"
                            variant: !idx ? 'filled' : 'outlined' }, void 0) }), String(idx)))) }), void 0), (0, jsx_runtime_1.jsx)(Divider_1.default, {}, void 0), (0, jsx_runtime_1.jsxs)(Stack_1.default, Object.assign({ sx: { flexGrow: 1, overflowY: 'auto' } }, { children: [results.map((result, index) => ((0, jsx_runtime_1.jsxs)(Accordion_1.default, Object.assign({ expanded: expanded === `panel-${index}`, onChange: handleExpand(`panel-${index}`) }, { children: [(0, jsx_runtime_1.jsxs)(AccordionSummary_1.default, Object.assign({ expandIcon: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}, void 0), "aria-controls": `panel${index}bh-content`, id: `panel${index}bh-header` }, { children: [(0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ sx: { width: '33%', flexShrink: 0 } }, { children: result.primary }), void 0), (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ sx: { color: 'text.secondary' } }, { children: result.secondary }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(AccordionDetails_1.default, { children: typeof result.details === 'string' ? ((0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ variant: "caption" }, { children: result.details }), void 0)) : typeof result.details === 'function' ? (result.details()) : (result.details) }, void 0)] }), void 0))), (0, jsx_runtime_1.jsx)(Divider_1.default, {}, void 0)] }), void 0)] }), void 0) }, void 0));
};
exports.SearchPane = SearchPane;
function useSearchPane() {
    const resetState = (0, recoil_1.useResetRecoilState)(AppState_1.atomPane);
    const [isOpen, setState] = (0, react_1.useState)(false);
    const close = (0, react_1.useCallback)(() => {
        if (isOpen) {
            resetState();
            setState(false);
        }
    }, [resetState]);
    const resetHistory = (0, recoil_1.useResetRecoilState)(SearchState_1.appSearchHistory);
    const resetInput = (0, recoil_1.useResetRecoilState)(SearchState_1.appSearchInput);
    const reducer = (state, action) => {
        switch (action.type) {
            case 'CLEAR_ALL':
                resetInput();
                resetHistory();
                break;
            case 'CLOSE':
                close();
                break;
        }
        return state;
    };
    const setter = (0, recoil_1.useSetRecoilState)(AppState_1.atomPane);
    const open = (0, react_1.useCallback)(() => {
        setter({
            actions: {
                clearAll: {
                    action: { type: 'CLEAR_ALL' },
                    icon: ClearAll_1.default,
                    label: 'Clear All'
                },
                close: {
                    action: { type: 'CLOSE' },
                    icon: Close_1.default,
                    label: 'Close',
                }
            },
            contentComponent: exports.SearchPane,
            icon: Search_1.default,
            maxWidth: 'sm',
            reducer,
            title: 'Search'
        });
        setState(true);
    }, [setter]);
    return {
        isOpen,
        close,
        open,
    };
}
exports.default = useSearchPane;
