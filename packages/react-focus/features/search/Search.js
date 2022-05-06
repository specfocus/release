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
exports.SearchMenu = exports.SearchControl = exports.SearchButton = exports.SearchBox = exports.SEARCH_WIDGET = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
// import Divider from '@mui/material/Divider';
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const Search_1 = __importDefault(require("@mui/icons-material/Search"));
// import DirectionsIcon from '@mui/icons-material/Directions';
const material_1 = require("@mui/material");
const Divider_1 = __importDefault(require("@mui/material/Divider"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const InputBase_1 = __importDefault(require("@mui/material/InputBase"));
const Menu_2 = __importDefault(require("@mui/material/Menu"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const styles_1 = require("@mui/styles");
const SearchState_1 = require("./SearchState");
const react_1 = require("react");
const recoil_1 = require("recoil");
const AppState_1 = require("../../app/AppState");
const TranslatedTooltip_1 = __importDefault(require("../../components/TranslatedTooltip"));
const SearchPane_1 = __importDefault(require("./SearchPane"));
exports.SEARCH_WIDGET = 'SEARCH_WIDGET';
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
                return next;
            }
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
    const [pane, setWidget] = (0, recoil_1.useRecoilState)(AppState_1.atomPane);
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const { open } = (0, SearchPane_1.default)();
    const handleMenu = (0, react_1.useCallback)((event) => setAnchorEl(event.currentTarget), [setAnchorEl]);
    const handleClose = (0, react_1.useCallback)(() => setAnchorEl(null), [setAnchorEl]);
    const handleWidget = (0, react_1.useCallback)(() => {
        setAnchorEl(null);
        open();
    }, [setAnchorEl, setWidget]);
    const isSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('md'));
    (0, react_1.useEffect)(() => {
        if (isSmall) {
            handleClose();
        }
    }, [isSmall]);
    if (isSmall || pane === exports.SEARCH_WIDGET) {
        return ((0, jsx_runtime_1.jsx)(exports.SearchButton, { disabled: pane === exports.SEARCH_WIDGET, onClick: handleWidget }, void 0));
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(exports.SearchBox, { onMenuClick: handleMenu }, void 0), (0, jsx_runtime_1.jsx)(exports.SearchMenu, { anchorEl: anchorEl, onBlur: handleClose, onClose: handleClose, onWidget: handleWidget, open: Boolean(anchorEl) }, void 0)] }, void 0));
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
                } }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ variant: "caption", sx: { flexGrow: 1 } }, { children: "Expand" }), void 0), (0, jsx_runtime_1.jsx)(ChevronRight_1.default, { sx: { flexGrow: 0 } }, void 0)] }), `search-pane`), (0, jsx_runtime_1.jsx)(Divider_1.default, {}, void 0), history.map((text, index) => ((0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ onClick: event => {
                    setInput(text);
                    if (onClose) {
                        onClose(event, "escapeKeyDown");
                    }
                }, selected: text === input }, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ variant: "inherit" }, { children: text }), void 0) }), `search-history-${index}`)))] }), "table-row-density-menu"));
};
exports.SearchMenu = SearchMenu;
