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
const React = __importStar(require("react"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
const LocationOn_1 = __importDefault(require("@mui/icons-material/LocationOn"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const parse_1 = __importDefault(require("autosuggest-highlight/parse"));
const throttle_1 = __importDefault(require("lodash/throttle"));
// ⚠️ Before you can start using the Google Maps JavaScript API, you must sign up and create a billing account.
// https://developers.google.com/maps/documentation/javascript/tutorial
function loadScript(src, position, id) {
    if (!position) {
        return;
    }
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}
const autocompleteService = { current: null };
function GoogleMaps() {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);
    if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBwRp1e12ec1vOTtGiA4fcCt2sCUS78UYc&libraries=places', document.querySelector('head'), 'google-maps');
        }
        loaded.current = true;
    }
    const fetch = React.useMemo(() => (0, throttle_1.default)((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
    }, 200), []);
    React.useEffect(() => {
        let active = true;
        if (!autocompleteService.current && window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }
        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }
        fetch({ input: inputValue }, (results) => {
            if (active) {
                let newOptions = [];
                if (value) {
                    newOptions = [value];
                }
                if (results) {
                    newOptions = [...newOptions, ...results];
                }
                setOptions(newOptions);
            }
        });
        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);
    return ((0, jsx_runtime_1.jsx)(Autocomplete_1.default, { id: "google-map-demo", sx: { width: 300 }, getOptionLabel: (option) => typeof option === 'string' ? option : option.description, filterOptions: (x) => x, options: options, autoComplete: true, includeInputInList: true, filterSelectedOptions: true, value: value, onChange: (event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
        }, onInputChange: (event, newInputValue) => {
            setInputValue(newInputValue);
        }, renderInput: (params) => ((0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({}, params, { label: "Add a location", fullWidth: true }), void 0)), renderOption: (props, option) => {
            const matches = option.structured_formatting.main_text_matched_substrings;
            const parts = (0, parse_1.default)(option.structured_formatting.main_text, matches.map((match) => [match.offset, match.offset + match.length]));
            return ((0, jsx_runtime_1.jsx)("li", Object.assign({}, props, { children: (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ container: true, alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: LocationOn_1.default, sx: { color: 'text.secondary', mr: 2 } }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ item: true, xs: true }, { children: [parts.map((part, index) => ((0, jsx_runtime_1.jsx)("span", Object.assign({ style: {
                                        fontWeight: part.highlight ? 700 : 400,
                                    } }, { children: part.text }), index))), (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ variant: "body2", color: "text.secondary" }, { children: option.structured_formatting.secondary_text }), void 0)] }), void 0)] }), void 0) }), void 0));
        } }, void 0));
}
exports.default = GoogleMaps;
