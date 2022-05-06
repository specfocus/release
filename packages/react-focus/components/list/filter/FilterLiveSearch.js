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
const Search_1 = __importDefault(require("@mui/icons-material/Search"));
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const core_1 = require("../../../features/core");
const TextInput_1 = __importDefault(require("../../input/TextInput"));
/**
 * Form and search input for doing a full-text search filter.
 *
 * Triggers a search on change (with debounce).
 *
 * @example
 *
 * const FilterPanel = () => (
 *     <Card>
 *         <CardContent>
 *             <FilterLiveSearch source="title" />
 *         </CardContent>
 *     </Card>
 * );
 */
const FilterLiveSearch = (props) => {
    const { source = 'q' } = props, rest = __rest(props, ["source"]);
    const { filterValues, setFilters } = (0, core_1.useListFilterContext)();
    const translate = (0, core_1.useTranslate)();
    const onSearchChange = (event) => {
        if (event.target) {
            setFilters(Object.assign(Object.assign({}, filterValues), { [source]: event.target.value }), null);
        }
        else {
            const _a = filterValues, _b = source, _ = _a[_b], filters = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            setFilters(filters, null);
        }
    };
    const initialValues = (0, react_1.useMemo)(() => ({
        [source]: filterValues[source],
    }), [filterValues, source]);
    const onSubmit = () => undefined;
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.Form, Object.assign({ initialValues: initialValues, onSubmit: onSubmit }, { children: () => ((0, jsx_runtime_1.jsx)(TextInput_1.default, Object.assign({ resettable: true, helperText: false, source: source, label: translate('ra.action.search'), InputProps: {
                endAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "end" }, { children: (0, jsx_runtime_1.jsx)(Search_1.default, { color: "disabled" }, void 0) }), void 0)),
            }, onChange: onSearchChange }, rest), void 0)) }), void 0));
};
exports.default = (0, react_1.memo)(FilterLiveSearch);
