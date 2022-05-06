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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ChevronLeft_1 = __importDefault(require("@mui/icons-material/ChevronLeft"));
const ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const prop_types_1 = __importDefault(require("prop-types"));
const React = __importStar(require("react"));
const core_1 = require("../../../features/core");
const PREFIX = 'RaPaginationActions';
const classes = {
    actions: `${PREFIX}-actions`,
    button: `${PREFIX}-button`,
    currentPageButton: `${PREFIX}-currentPageButton`,
    hellip: `${PREFIX}-hellip`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.actions}`]: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: 20,
    },
    [`& .${classes.button}`]: {},
    [`& .${classes.currentPageButton}`]: {},
    [`& .${classes.hellip}`]: { padding: '1.2em' },
}));
const PaginationActions = props => {
    const { page, rowsPerPage, count, onPageChange, color, size } = props;
    const translate = (0, core_1.useTranslate)();
    const theme = (0, styles_1.useTheme)();
    /**
     * Warning: material-ui's page is 0-based
     */
    const range = () => {
        const nbPages = Math.ceil(count / rowsPerPage) || 1;
        if (isNaN(page) || nbPages === 1) {
            return [];
        }
        const input = [];
        // display page links around the current page
        if (page > 1) {
            input.push(1);
        }
        if (page === 3) {
            input.push(2);
        }
        if (page > 3) {
            input.push('.');
        }
        if (page > 0) {
            input.push(page);
        }
        input.push(page + 1);
        if (page < nbPages - 1) {
            input.push(page + 2);
        }
        if (page === nbPages - 4) {
            input.push(nbPages - 1);
        }
        if (page < nbPages - 4) {
            input.push('.');
        }
        if (page < nbPages - 2) {
            input.push(nbPages);
        }
        return input;
    };
    const getNbPages = () => Math.ceil(count / rowsPerPage) || 1;
    const prevPage = event => {
        if (page === 0) {
            throw new Error(translate('ra.navigation.page_out_from_begin'));
        }
        onPageChange(event, page - 1);
    };
    const nextPage = event => {
        if (page > getNbPages() - 1) {
            throw new Error(translate('ra.navigation.page_out_from_end'));
        }
        onPageChange(event, page + 1);
    };
    const gotoPage = event => {
        const page = parseInt(event.currentTarget.dataset.page, 10);
        if (page < 0 || page > getNbPages() - 1) {
            throw new Error(translate('ra.navigation.page_out_of_boundaries', {
                page: page + 1,
            }));
        }
        onPageChange(event, page);
    };
    const renderPageNums = () => {
        return range().map((pageNum, index) => pageNum === '.' ? ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: classes.hellip }, { children: "\u2026" }), `hyphen_${index}`)) : ((0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ size: size, className: (0, classnames_1.default)('page-number', classes.button, {
                [classes.currentPageButton]: pageNum === page + 1,
            }), color: color, variant: pageNum === page + 1 ? 'outlined' : 'text', "data-page": pageNum - 1, onClick: gotoPage }, { children: pageNum }), pageNum)));
    };
    const nbPages = getNbPages();
    if (nbPages === 1) {
        return (0, jsx_runtime_1.jsx)(Root, { className: classes.actions }, void 0);
    }
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: classes.actions }, { children: [page > 0 && ((0, jsx_runtime_1.jsxs)(Button_1.default, Object.assign({ color: color, size: size, onClick: prevPage, className: "previous-page" }, { children: [theme.direction === 'rtl' ? ((0, jsx_runtime_1.jsx)(ChevronRight_1.default, {}, void 0)) : ((0, jsx_runtime_1.jsx)(ChevronLeft_1.default, {}, void 0)), translate('ra.navigation.prev')] }), "prev")), renderPageNums(), page !== nbPages - 1 && ((0, jsx_runtime_1.jsxs)(Button_1.default, Object.assign({ color: color, size: size, onClick: nextPage, className: "next-page" }, { children: [translate('ra.navigation.next'), theme.direction === 'rtl' ? ((0, jsx_runtime_1.jsx)(ChevronLeft_1.default, {}, void 0)) : ((0, jsx_runtime_1.jsx)(ChevronRight_1.default, {}, void 0))] }), "next"))] }), void 0));
};
/**
 * PaginationActions propTypes are copied over from material-ui’s
 * TablePaginationActions propTypes. See
 * https://github.com/mui-org/material-ui/blob/869692ecf3812bc4577ed4dde81a9911c5949695/packages/material-ui/src/TablePaginationActions/TablePaginationActions.js#L53-L85
 * for reference.
 */
PaginationActions.propTypes = {
    backIconButtonProps: prop_types_1.default.object,
    count: prop_types_1.default.number.isRequired,
    nextIconButtonProps: prop_types_1.default.object,
    onPageChange: prop_types_1.default.func.isRequired,
    page: prop_types_1.default.number.isRequired,
    rowsPerPage: prop_types_1.default.number.isRequired,
    color: prop_types_1.default.oneOf(['primary', 'secondary']),
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
    theme: prop_types_1.default.object,
};
PaginationActions.defaultProps = {
    color: 'primary',
    size: 'small',
};
exports.default = React.memo(PaginationActions);
